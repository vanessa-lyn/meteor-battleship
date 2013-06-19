//////////////////////////
//  Name: Router
//  Desription: dynamically changing page content 
//  Date: 06/13
//  Notes:
//      using Netuts tutorial setting up routing
//      http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-multi-page-site-with-meteor/
//////////////////////////

Router = {
    /* Current URL */
    uri: _.compact(window.location.pathname.split("/")), 
    routes: [],
    
    /* function to add a route */
    addRoute: function (route, template) {
        var segments = _.compact(route.split("/"));

        var placeholders = _.reduce(segments, function(currentArr, piece, index) {
            if(piece.substr(0,1) === ":"){
                currentArr.push(index);
                segments[index] = piece.substr(1);
            }
            return currentArr;
        }, []);

        this.routes.push({
            segments: segments,
            template: template,
            placeholderIndexes: placeholders
        });
    }, 

    /* functon to get matching route */
    getMatchingRoute: function(){
        for (var i in this.routes) {
            var route = this.routes[i];
            var data = {};

            if (route.segments.length === this.uri.length) {
                var match = _.every(route.segments, function(seg, i){
                    if (_.contains(route.placeholderIndexes, i)) {
                        data[seg] = this.uri[i];
                        return true;
                    } else{
                        return seg === this.uri[i];
                    }
                }, this);
                
                if (match) {
                    return {
                        data: data,
                        template: route.template
                    }
                }
            }
        }

        return false;
    },

    /* function to display the matched route's template */ 
    run: function (){
        var route = this.getMatchingRoute();
        if(route) {
            var fragment = Meteor.render(function(){
                if(Template[route.template] !== undefined){
                    return Template[route.template](route.data);
                }
            });
            document.body.appendChild(fragment);
        }
        else{
            //404
        }
    }

};
//////////////////////////
//  Name: Main
//  Desription: handler for any functionality on the client side
//  Date: 06/13
//  Notes:
//      using Netuts tutorial setting up routing
//      http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-multi-page-site-with-meteor/
//////////////////////////

Meteor.startup(function(){
    Router.addRoute('/home', 'homeTemplate');
    Router.addRoute('/user/:username', 'profileTemplate');
    Router.addRoute('/battle/:battlenum', 'gameTemplate');

    Router.run();
});


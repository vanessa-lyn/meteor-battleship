

//Router Setup
Meteor.Router.add({
  '/': 'homeTemplate',
  '/user/:id': 'profileTemplate',
  '/battle/:id': 'gameTemplate'
});


/////////////////////////////
//STATIC DATA: Prototyping phase 



/////////////////////////////


//Notification Messaging
Template.homeTemplate.notification = function(){
    //check for the user data and it's properties
    var user = Meteor.userId() && Meteor.user() && Meteor.user().profile ? Meteor.user().profile.name : "";

    if(user !== null){
        console.log(user);
      return "Welcome back "+user+"!";
    }
    else{
      return "Please log in to play.";
    }
}


//helpers to pull in the data into the app
Template.games.helpers({
  games: function(){ return Games.find(); }
});

Template.players.helpers({
  players: function (){ return Players.find(); }
});


Template.gameTemplate.helpers({
  gameTemplate: function(){ return Games.findOne(Sessions.get('gameId')); }
});




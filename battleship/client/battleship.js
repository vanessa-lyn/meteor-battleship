

//Router Setup
Meteor.Router.add({
  '/': 'homeTemplate',
  '/user/:id': 'profileTemplate',
  '/battle/:id': 'gameTemplate'
});


/////////////////////////////
//STATIC DATA: Prototyping phase 

/////////////////////////////


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




var games = [
  {gameId: 'COD', currentPlayers: "Soap vs. Price", gameUrl: '/battle/cod', 
    war:[
      {player: 'Soap', score: 10},
      {player: 'Price', score: 3},
    ]},
  {gameId: 'Battlefield 3', currentPlayers: "Henry Blackburn vs. Solomon", gameUrl: '/battle/battlefield'},
  {gameId: 'Some other FPS game', currentPlayers: "thisGuy vs. thatGuy", gameUrl: '/battle/fps'}
];

var players = [
  {userName: 'ME', status: "..."},
  {userName: 'Soap', status: "Handling Fools"},
  {userName: 'Price', status: "hatin'"},
  {userName: 'random666', status: "READY"},
  {userName: 'Henry Blackburn', status: "Noob Toobin'"},
  {userName: 'yoMama', status: "READY"},
  {userName: 'Solomon', status: "Battling"},
  {userName: 'thisGuy', status: "Relieving Stress"},
  {userName: 'Dude', status: "READY"},
  {userName: 'dudette', status: "READY"},
  {userName: 'thatGuy', status: "Lighting up some beatches"},
];
 
Template.games.helpers({
  games: games
});

Template.players.helpers({
  players: players
});

Template.gameTemplate.helpers({
  gameTemplate: games[0]
});


Meteor.Router.add({
  '/': 'homeTemplate',
  '/user/:id': 'profileTemplate',
  '/battle/:id': 'gameTemplate'
});
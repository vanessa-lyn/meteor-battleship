Games = new Meteor.Collection('games');
Players = new Meteor.Collection('players');






/*if(Meteor.isServer && Games.find().count() == 0) {
    var games = [
      {gameId: 'COD', currentPlayers: "Soap vs. Price", gameUrl: '/battle/cod', 
        war:[
          {player: 'Soap', score: 10},
          {player: 'Price', score: 3},
        ]},
      {gameId: 'Battlefield', currentPlayers: "Henry Blackburn vs. Solomon"},
      {gameId: 'Some other FPS game', currentPlayers: "thisGuy vs. thatGuy"}
    ];

    //Inserting each of the game rooms into the data object
    _.each(games, function(game){
        Games.insert(game);
    });

}*/
/*if(Meteor.isServer && Players.find().count() == 0) {
    
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


    //Inserting each of the game rooms into the data object
    _.each(players, function(player){
        Players.insert(player);
    });

}*/
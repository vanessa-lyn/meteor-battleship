//////////////////////////
//  Name: Templates.js
//  Desription: declaring contact placeholder
//  Date: 06/13
//  Notes:
//      using Netuts tutorial setting up routing
//      http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-multi-page-site-with-meteor/
//////////////////////////


Template.homeTemplate.twitterName = function(){
    Session.setDefault('twitter_name', "@NesserG");
    return Session.get('twitter_name');
}
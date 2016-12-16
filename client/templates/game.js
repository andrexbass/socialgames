import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var'

var bggGames = new ReactiveVar(0);
var fGame = new ReactiveVar(0);
bggGames.set([]);
fGame.set([]);


Template.games.rendered = function(){

    //Exemplo de consulta de dados para um jogo especifico
    //Meteor.call('bgg.game', '96913', function(e, result){
    //  console.log(result);
    //});

    $("#divFormGame").hide();
    $('#divFocusGame').hide();
};

Template.games.events({
    // Search games
    'click #btnSearchGame' : function(event, template){

      Meteor.call('bgg.search', $("#search").val(), function(e, result){
        console.log(result);
        bggGames.set(result);
        $('#tableListGames').show();
        $('#divFocusGame').hide();
      });
    },
    // View more informations for the game
    'click .moreInformation' : function(event, template){
      var gameId = $(event.target).attr("game-id");
      Meteor.call('bgg.game', gameId, function(e, result){
        console.log(result);
        fGame.set(result);
        $('#tableListGames').hide();
        $('#divFocusGame').show();
      });
    }
});

Template.games.helpers({
  localizedGames() {
    return bggGames.get();
  },
  focusGame() {
    return fGame.get();
  }
})
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var'

var bggGames = new ReactiveVar(0);
bggGames.set([]);

Template.games.rendered = function(){

    //Exemplo de consulta de dados para um jogo especifico
    //Meteor.call('bgg.game', '96913', function(e, result){
    //  console.log(result);
    //});

    $("#divFormGame").hide();
};

Template.games.events({

    'click #btnSearchGame' : function(event, template){

      Meteor.call('bgg.search', $("#search").val(), function(e, result){
        bggGames.set(result);
      });
    }
});

Template.games.helpers({
  localizedGames() {
    return bggGames.get();
  }
})
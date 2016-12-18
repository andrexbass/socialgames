import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var'

var bggGames = new ReactiveVar(0);
var fGame = new ReactiveVar(0);

Template.games.rendered = function(){
    $("#divFormGame").hide();
    $('#divFocusGame').hide();
};

Template.games.events({
    // Search games
    'click #btnSearchGame' : function(event, template){
      Meteor.call('bgg.search', $("#search").val(), function(e, result){
        bggGames.set(result);
        $('#tableListGames').show();
        $('#divFocusGame').hide();
      });
    },
    // View more informations for the game
    'click .moreInformation' : function(event, template){
      var gameId = $(event.target).attr("game-id");
      Meteor.call('bgg.game', gameId, function(e, result){
        fGame.set(result);
        $('#tableListGames').hide();
        $('#divFocusGame').show();
      });
    },
    // Abre informações detalhadas do jogo
    'click #useGame' : function(event, template) {
      var dataGame = fGame.get();
      $('#name').val(dataGame.name.text);
      $('#description').val(dataGame.description);
      $('#tableListGames').hide();
      $('#divFocusGame').hide();
      $('#divSearchGame').hide();
      $("#divFormGame").show();
    },
    // Cancela a ação e volta para o inicio
    'click #btnCancelar' : function(event, template) {
      $('#divSearchGame').show();
      $("#divFormGame").hide();
    },
    // Salva o jogo na base de dados
    'click #btnSalvar' : function(event, template) {
      let game = $('form[name="formGame"]').serializeJSON();
      bggGame = fGame.get();
      game.bggid = bggGame.generic.objectid;
      game.minplayers = bggGame.minplayers;
      game.maxplayers = bggGame.maxplayers;
      game.playingtime = bggGame.playingtime;
      game.age = bggGame.age;
      game.yearpublished = bggGame.yearpublished;
      game.thumbnail = bggGame.thumbnail;
      game.image = bggGame.image;
      Meteor.call('game.insert', game, function (e, result) {
        if(result){
            alert("Jogo salvo com sucesso");
            $('#divSearchGame').show();
            $("#divFormGame").hide();
        } else {
            alert("Erro ao tentar salvar um jogo");
        }
      });
    }
});

Template.games.helpers({
  localizedGames() {
    return bggGames.get();
  },
  focusGame() {
    return fGame.get();
  },
  formGame() {
    return fGame.get();
  }
})
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var'

Meteor.subscribe('game.list');
Meteor.subscribe('friends.list');

var rGame = new ReactiveVar(0);
var rMaxPlayers = new ReactiveVar(0);

const Games = new Mongo.Collection('games');
const Friends = new Mongo.Collection('friends');

Template.matches.rendered = function(){
    $("#selectGame").select2({
    	placeholder: "Começe a digite o nome do jogo",
    	maximumSelectionLength: 1,
      	allowClear: true
    });

    $('#viewGame').hide();
    $('#divPlayers').hide();
    $('#divButtons').hide();
};

Template.matches.helpers({
	games() {
        return Games.find();
	},
	game() {
		return rGame.get();
	},
    maxplayers() {
        return rMaxPlayers.get();
    },
    // Implementação do index manual a alocação de jogadores (descobrir como fazer automatico com blaze)
    arrMaxPlayers() {
        var arrMaxPlayers = [];
        for (var i = 1; i <= rMaxPlayers.get(); i++) {
            arrMaxPlayers.push({index: i});
        }
        console.log(arrMaxPlayers);
        return arrMaxPlayers;
    },
    friends() {
        return Friends.find({meu_id: Meteor.user()._id});
    }
});

Template.matches.events({
    // Search games
    'change #selectGame' : function(event, template) {
      	game = Games.findOne({bggid: $("#selectGame").val()[0]});
		rGame.set(game);
        rMaxPlayers.set(game.maxplayers);
        $('#divButtons').show();
    },
    'click #btnMatchNow' : function(event, template) {
        $('#divButtons').hide();
        $('#divPlayers').show();
    }
});

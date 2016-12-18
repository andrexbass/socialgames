import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var'

Meteor.subscribe('game.list');

const Games = new Mongo.Collection('games');

Template.matches.rendered = function(){
    $("#game").select2({
    	placeholder: "Escolha um jogo",
    });
};

Template.matches.helpers({
	games() {
        return Games.find();
	}
});
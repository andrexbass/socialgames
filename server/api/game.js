import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Games = new Mongo.Collection('games');

Meteor.methods({
	'game.insert'(game) {
		game.createdAt = new Date();
		Games.insert(game);
		return true;
	},
	'game.find'() {
		return Games.find({}).fetch();
	}
});

Meteor.publish('game.list', function(){
	return Games.find();
});


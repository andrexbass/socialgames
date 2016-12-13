import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Place = new Mongo.Collection('place');

Meteor.methods({
	'place.insert'(place){
		place['createdAt'] = new Date();
		Place.insert(place);
		return true;
	},
	'place.find'(){
		return Place.find({}).fetch();
	}
});


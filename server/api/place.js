import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Place = new Mongo.Collection('place');

Meteor.methods({
	'place.insert'(place){
		Place.insert(place);
		return true;
	}
});
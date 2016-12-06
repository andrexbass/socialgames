import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Places = new Mongo.Collection('places');

Meteor.methods({
	'places.insert'(place){
		Places.insert(place);
		return true;
	}
});
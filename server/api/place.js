import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Places = new Mongo.Collection('places');

Meteor.methods({
	'places.insert'(place){
		Places.insert(place);
		return true;
	},
	'places.find'(){
		return Places.find().fetch();
	}
});

Meteor.publish('places.list', function(){
	return Places.find();
});
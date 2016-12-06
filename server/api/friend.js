import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'users.list'(){
		console.log(Meteor.users.find());
		return Meteor.users.find();
	}
});
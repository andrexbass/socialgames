import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'users.list'() {
		return "A6";
	}
});

Meteor.publish('friends.listEmails',function(){
  // you should restrict this publication to only be available to admin users
  return Meteor.users.find({},{fields: { emails: 1 }});
});
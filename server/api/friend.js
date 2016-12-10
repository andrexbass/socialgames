import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Friends = new Mongo.Collection('friends');

Meteor.methods({
	'friends.add'(dados) {
		var usuario = Meteor.users.findOne({_id: dados.users_id});
		if (usuario.services.facebook) {
			var friend = {
				nome: usuario.profile.name,
				email: usuario.services.facebook.email
			}
		} else {
			var friend = {
				email: usuario.emails[0].address
			}
		}
		
		Friends.insert(friend);
	}
});

Meteor.publish('friends.listEmails', function(){
  	// you should restrict this publication to only be available to admin users
  	return Meteor.users.find({},{fields: { emails: 1 , services: 1}});
});

Meteor.publish('friends.list', function(){
	return Friends.find({});
});
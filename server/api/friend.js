import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Friends = new Mongo.Collection('friends');

Meteor.methods({
	'friends.add'(dados) {
		var usuario = Meteor.users.findOne({_id: dados.users_id});
		if (isFriendExist(dados)) {
			return "friend-exist";
		} else {
			if (usuario.services.facebook) {
			buildFriendFacebook(dados, usuario);
			} else {
				buildFriendBase(dados, usuario);
			}
			Friends.insert(friend);
			return "ok";
		}
		
	}
});

Meteor.publish('friends.listEmails', function(){
  	return Meteor.users.find({},{fields: {_id: 1, emails: 1 , services: 1}});
});

Meteor.publish('friends.list', function(){
	return Friends.find();
});


// Monta um registro de amigo vindo do facebook
function buildFriendFacebook(dados, usuario) {
	return friend = {
		nome: usuario.profile.name,
		email: usuario.services.facebook.email,
		amigo_id: dados.users_id,
		meu_id: Meteor.user()._id
	}
}

// Monta um registro de amigo da base
function buildFriendBase(dados, usuario) {
	return friend = {
		email: usuario.emails[0].address,
		amigo_id: dados.users_id,
		meu_id: Meteor.user()._id
	}
}

// Verifica se o amigo já existe na collection de amigos
function isFriendExist(dados) {
	var qtdAmigo = Friends.find({amigo_id:dados.users_id}).count();
	if (qtdAmigo > 0 ) {
		return true;
	} else {
		return false;
	}
}
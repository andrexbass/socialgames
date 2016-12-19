import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Meteor.subscribe('friends.listEmails');
Meteor.subscribe('friends.list');

const Friends = new Mongo.Collection('friends');

Template.friends.rendered = function(){
    $("#amigos").select2({
    	placeholder: "digite o email do seu amigo",
      maximumSelectionLength: 1,
      allowClear: true
    });
};

Template.friends.helpers({
	allUsers() {
    var usuarioLogado_id = Meteor.user()._id;
		return Meteor.users.find({_id:{$ne: usuarioLogado_id}});
	},
	emailDoAmigo() {
		if (this.services.facebook) {
			return this.services.facebook.email;
		} else {
			return this.emails[0].address;
		}
	},
  amigos() {
    return Friends.find({meu_id: Meteor.user()._id});
  }
});

Template.friends.events({
    // Adiciona um amigo em sua lista de amigos
    'click #btnAddFriend' : function(event, template){
    	let friends = $('form[name="form-add-friend"]').serializeJSON();
    	Meteor.call('friends.add', friends, function(e, result){
        if (result == "friend-exist") {
          alert("já é seu amigo");
        }
      });
    }
});
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Meteor.subscribe('friends.listEmails');
Meteor.subscribe('friends.list');

const Friends = new Mongo.Collection('friends');

Template.friends.rendered = function(){
    $("#amigos").select2({
    	placeholder: "digite o email do seu amigo",
    });
};

Template.friends.helpers({
	allUsers() { 
		return Meteor.users.find({});
	},
	emailDoAmigo() {
		if (this.services.facebook) {
			return this.services.facebook.email;
		} else {
			return this.emails[0].address;
		}
	},
  amigos() {
    return Friends.find();
  }
});

Template.friends.events({

    'click #btnAddFriend' : function(event, template){

    	let friends = $('form[name="form-add-friend"]').serializeJSON();
    	Meteor.call('friends.add', friends);
    }
});
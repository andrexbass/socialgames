import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Meteor.subscribe('friends.listEmails');

Template.friends.rendered = function(){
    $("#amigos").select2({
    	placeholder: "digite o email do seu amigo",
    });
};

Template.friends.helpers({
	allUsers() { 
		return Meteor.users.find({}); 
	},
  	email(){
  		if (this.services.facebook) {
  			return this.services.facebook.email;
  		} else {
  			return this.emails[0].address;
  		}
  	}
});
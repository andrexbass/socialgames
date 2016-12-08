import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Meteor.subscribe('friends.listEmails');
Meteor.subscribe('friends.list');

Template.friends.rendered = function(){
    $("#amigos").select2({
    	placeholder: "digite o email do seu amigo",
    });
};

Template.friends.helpers({
	allUsers() { 
		return Meteor.users.find({}); 
	},
  	email() {
  		if (this.services.facebook) {
  			return this.services.facebook.email;
  		} else {
  			return this.emails[0].address;
  		}
  	},
  	amigos() {
  		return Meteor.call('friends.list', {}, function (e, result) {
  			console.log(result);
    		return result;
    	});
  	}
});

Template.friends.events({

    'click #btnAddFriend' : function(event, template){

    	let friends = $('form[name="form-add-friend"]').serializeJSON();
    	Meteor.call('friends.add', friends);
    }

});
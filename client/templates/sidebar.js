import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.sidebar.helpers({
    email: function() {
    	var user = Meteor.user();
    	if (user && user.emails) {
    		return user.emails[0].address;
    	} else {
    		return "";
    	}
    },
});
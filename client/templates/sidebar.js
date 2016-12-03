import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


Template.sidebar.helpers({
	usuario(){
		var nameUser = Meteor.user().profile.name;
		return nameUser;
	}
});
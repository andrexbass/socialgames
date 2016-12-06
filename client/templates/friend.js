import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.friends.rendered = function(){
    $("#amigos").select2({
    	placeholder: "digite o email do seu amigo",
    });

    Meteor.call('users.list', {}, function (e, result) {
    	console.log(result);
	});
};
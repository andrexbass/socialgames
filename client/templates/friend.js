import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.friends.rendered = function(){
    $("#amigos").select2();
};
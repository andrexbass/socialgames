import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor'
import './place.html';

Template.places.events({

    'click #save' : function(event, template){

    	let place = $('form[name="new-place"]').serializeJSON();

    	Meteor.call('places.insert', place, function (e, result) {
    		if(result){
    			alert("Local salvo com sucesso");
    		} else {
    			alert("Erro ao tentar salvar um local");
    		}
    	});
    }

});

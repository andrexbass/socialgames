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

        Meteor.call('place.find',function (e, resultList) {
        if(e){
                alert("Erro ao buscar os dados");
            } else {
                console.log(JSON.stringify(resultList));
                 Session.set("result", JSON.stringify(resultList));
                 console.log(Session.get("result"));
            }
        });
    }

});

Template.places.tasks = function() {
    return Place.find({});
};

/*
function resultList() {
    Meteor.call('place.find',function (e, resultList) {
        if(e){
                alert("Erro ao buscar os dados");
            } else {
                console.log(JSON.stringify(resultList));
                 Session.set("result", JSON.stringify(resultList));
                 console.log(Session.get("result"));
            }
        });

    return Session.get("result");
}*/
/*
Template.hello.greeting = function() {
  return Session.get('result').foo;
};
*/

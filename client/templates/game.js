import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.games.rendered = function(){

    //Exemplo de consulta de dados para um jogo especifico
    Meteor.call('bgg.game', '96913', function(e, result){
      console.log(result);
    });

    Meteor.call('bgg.search', 'lancaster', function(e, result){
      console.log(result);
    });

    $("#selGame").select2({
    	placeholder: "procure por um jogo no bgg"
	});
};
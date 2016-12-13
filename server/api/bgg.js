import { Meteor } from 'meteor/meteor';

var buffer = '';

var options = {
    headers: {
      	'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS',
        'Access-Control-Request-Method': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    }
}

Meteor.methods({
    // Retorna os dados de um jogo pelo seu identificador
    'bgg.game'(id) {
        return HTTP.call('GET', 'http://www.boardgamegeek.com/xmlapi/boardgame/'+ id, options);
    }
});
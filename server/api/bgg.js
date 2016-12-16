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
    'bgg.game' (id) {
        var xml = HTTP.call('GET', 'http://www.boardgamegeek.com/xmlapi/boardgame/'+ id, options);
        obj = converteForJson(xml);
        return obj.boardgames.boardgame;
    },
    // Retorna uma lista de jogos por meio de uma busca textual no titulo do jogo
    'bgg.search' (busca) {
        var xml = HTTP.call('GET', 'http://www.boardgamegeek.com/xmlapi/search?search=' + busca, options);
        obj = converteForJson(xml);
        return obj.boardgames.boardgame;
    }
});

// Converte um schema xml para objeto json
function converteForJson(xml) {
    var obj = null;
    xml2js.parseString(xml.content, {
        charkey: "text",
        attrkey: "generic",
        explicitArray: false
    }, 
    function (err, result) {
        obj = result;
    });
    return obj;
}
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-type": "text/html"});
    var params = querystring.parse(url.parse(req.url).query);
    if ('prenom' in params && 'nom' in params) {
	res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom'] + '<br/>');
    } else {
	res.write('Vous devez bien avoir un prénom et un nom, non ?<br/>');
    }
    if (page == '/') {
	res.write('Vous êtes à l\'acceuil, que puis-je pour vous ?');
    } else if (page == '/sous-sol') {
	res.write('Vous êtes dans la cave à vin, ces bouteilles sont à moi !');
    } else if (page == '/etage/1/chambre') {
	res.write('Hé ho, c\'est privé ici !');
    } else {
	res.write('Erreur 404 page inaccessible !');
    }
    res.end();
});
server.listen(8080);

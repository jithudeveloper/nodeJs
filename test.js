var a = require('./a.js');
var fs = require('fs');

a.my_func();
console.log('Tout c\'est bien passé !');
fs.readFile('./tuto.txt', {encoding: 'utf8'}, function (err, data) {
    if (err)
	return console.log('Erreur lors de la lecture :', err.message);
    console.log(err, data);
});

var data = fs.readFileSync('./tuto.txt', { encoding: 'utf8' });
console.log(data);

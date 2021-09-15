var http = require('http');
var uc = require('upper-case');

var texto = 'desenvovlimento de aplicações distribuídas e móveis';

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write(uc.upperCase(texto));
        res.end();
    }
).listen(8080);

console.log('Servidor iniciadao na porta 8080. Pressione Ctrl + C para encerrar.');
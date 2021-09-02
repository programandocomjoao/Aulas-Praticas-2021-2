var http = require('http');
var url = require('url');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
        
        var dados = url.parse(req.url, true);
        var args = dados.query;

        res.write('<!DOCTYPE html>');
        res.write('<html lang="pt-br">');
        res.write('<head>');
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Cadastro de Pessoa</h1>');

        res.write(`<p>Nome: ${args.nome}</p>`);
        res.write(`<p>Sobrenome: ${args.sobrenome}</p>`);

        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');  
var http = require('http');
var url = require('url');

var endereco = 'http://localhost:8080/data.html?dia=17&mes=3&ano=2003';
var dados = url.parse(endereco, true);
var args = url.parse(endereco, true).query;

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

        res.write('<h1>Dados do Endereço</h1>');
        res.write(`<p>Domínio: ${dados.host}</p>`);
        res.write(`<p>Caminho/subdomínio: ${dados.pathname}</p>`);
        res.write(`<p>Argumentos: ${dados.search}</p>`);

        res.write('<h1>Dados dos Argumentos</h1>');
        res.write(`<p>Dia: ${args.dia}</p>`);
        res.write(`<p>Mês: ${args.mes}</p>`);
        res.write(`<p>Ano: ${args.ano}</p>`);

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');
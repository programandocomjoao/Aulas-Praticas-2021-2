var http = require('http');

var nome = "José Maria";
var idade = 64;
var peso = 77.9;
var altura = 1.79;
var sexo = 'M';

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});    
        
        res.write('<!DOCTYPE html>');
        res.write('<html lang="pt-br">');
        res.write('<head>');
        res.write('<title>Clínica de Nutrição</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Dados do Paciente</h1>');
        res.write(`<p>Nome: ${nome}</p>`);
        res.write(`<p>Idade: ${idade} anos</p>`);
        res.write(`<p>Peso: ${peso}kg</p>`);
        res.write(`<p>Altura: ${altura}m</p>`);
        res.write(`<p>Sexo: ${sexo}</p>`);
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');
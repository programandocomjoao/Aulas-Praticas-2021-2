var http = require('http');

var nome = "Maria Fernanda";
var idade = 8;
var peso = 37.9;
var altura = 1.29;
var sexo = 'F';

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

        res.write('<!DOCTYPE html>');
        res.write('<html lang="pt-br">');
        res.write('<head>');
        res.write('<title>Clínica de Nutrição</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Dado do Paciente</h1>');
        res.write('<p>Nome: ' + nome + '</p>');
        res.write('<p>Idade: ' + idade + '</p>');
        res.write('<p>Peso: ' + peso + '</p>');
        res.write('<p>Altura: ' + altura + '</p>');
        res.write('<p>Sexo: ' + sexo + '</p>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');
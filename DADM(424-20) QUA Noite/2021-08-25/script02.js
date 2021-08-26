var http = require('http');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});    
        
        res.write('<!DOCTYPE html>');
        res.write('<html lang="pt-br">');
        res.write('<head>');
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Aula de Node.js</h1>');
        res.write('<p>Aprender JavaScript é construir o futuro.</p>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');
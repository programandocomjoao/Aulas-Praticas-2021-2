var http = require('http');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-type':'text/plain; charset=utf-8'});    
        res.write('Desenvolvimento de Aplicações Distribuídas e Móveis');
        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');
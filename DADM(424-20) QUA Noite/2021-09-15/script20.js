var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(
    function(req, res) {
        var endereco = req.url;
        var dados = url.parse(endereco, true);
        var arquivo = '.' + dados.pathname;

        fs.readFile(arquivo,
            function(err, pagina) {
                if (err) {
                    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
                    res.write('<h1>Erro 404</h1>');
                    res.write('<p>Page Not Found (Página não encontrada).</p>');
                    res.write('<p>Digite o nome de um Tokusatsu válido na URL.</p>');

                    res.write('<ul>');
                    res.write('<li><a href="http://localhost:8080/jaspion.html">jaspion.html</a></li>');
                    res.write('<li><a href="http://localhost:8080/jiban.html">jiban.html</a></li>');
                    res.write('<li><a href="http://localhost:8080/jiraiya.html">jiraiya.html</a></li>');
                    res.write('</ul>');

                    res.end();                    
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    res.write(pagina);
                    res.end();
                }
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');
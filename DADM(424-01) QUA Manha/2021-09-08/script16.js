var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(
    function(req, res) {
        var dados = url.parse(req.url, true);
        var args = dados.query;
        var nomecomp = args.nome + ' ' + args.sobrenome + '\n';
        
        if (args.nome != 'undefined' && args.sobrenome != 'undefined') {
            fs.appendFile('cadastroNomes.txt', nomecomp,
                function(err) {
                    if (err)
                        throw err;
                }
            );
        }

        fs.readFile('resposta16.html', 
            function(err, pagina) {
                res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                res.write(pagina);
                res.end();
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');  
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(
    function(req, res) {
        if (req.url == '/gravar25') {
            var form = new formidable.IncomingForm();

            form.parse(req,
                function(err, fields, files) {
                    var localAtual = files.foto.path;
                    var localNovo = './' + files.foto.name;

                    fs.rename(localAtual, localNovo,
                        function(err) {
                            if (err)
                                throw err;
                        }
                    );

                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    res.write('<h1>Dados do Animal Cadastrado</h1>');
                    res.write(`<p>Nome: ${fields.nome}</p>`);
                    res.write(`<p>Ano de nascimnento: ${fields.ano}</p>`);
                    res.write(`<p>Espécie: ${fields.especie}</p>`);
                    res.write(`<p>Raça: ${fields.raca}</p>`);
                    res.end();
                }
            );
        }
        else {
            fs.readFile('cadastro25.html',
                function(err, pagina) {
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    res.write(pagina);
                    res.end();
                } 
            );
        }
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');
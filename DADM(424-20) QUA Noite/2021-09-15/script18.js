var fs = require('fs');

fs.unlink('meuArquivoRuim.txt',
    function(err) {
        if (err)
            throw err;
        }
);

console.log('Arquivo excluído com sucesso!');
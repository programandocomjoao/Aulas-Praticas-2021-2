var fs = require('fs');

fs.rename('meuArquivo.txt', 'meuArquivoNovo.txt',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo renomeado com sucesso!');
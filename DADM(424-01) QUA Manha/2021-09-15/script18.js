var fs = require('fs');

fs.unlink('arquivoRuim.txt',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo excluído com sucesso!');
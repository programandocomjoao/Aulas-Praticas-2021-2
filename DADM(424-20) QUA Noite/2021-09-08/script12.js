var fs = require('fs');

fs.writeFile('arquivo2.txt', 'Aprender Node.js é construir o futuro!', 
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo gravado com sucesso!');
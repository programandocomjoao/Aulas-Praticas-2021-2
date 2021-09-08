var fs = require('fs');

fs.writeFile('arquivo2.txt', 'Aprender React Native é construir o futuro!',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo gravado com sucesso!');
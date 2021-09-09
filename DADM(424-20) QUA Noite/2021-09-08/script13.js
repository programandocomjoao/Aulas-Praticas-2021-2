var fs = require('fs');
var texto = "Conhecereis o Node.js e o Node.js vos servirá!"

fs.writeFile('arquivo3.txt', texto, 
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo gravado com sucesso!');
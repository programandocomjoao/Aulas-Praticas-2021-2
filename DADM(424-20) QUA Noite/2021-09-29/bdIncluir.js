var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            var operacao = "INSERT INTO pessoa(nome, email) VALUES('Jose Maria', 'jose.maria@zipmail.com.br')";

            conexao.query(operacao,
                function(err) {
                    if (err)
                        throw err;
                    else
                        console.log('Pessoa incluída com sucesso!!!');
                }
            ); 
        }      
    }
);
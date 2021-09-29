var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            var operacao = "INSERT INTO pessoa(nome, email) VALUES('Jose Maria', 'jose.maria@gmail.com')";

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
var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            var operacao = "INSERT INTO pessoa(nome, email) VALUES ?";

            var pessoas = [
                ['Maria da Conceicao', 'maria.conceicao@gmail.com'],
                ['Dalira Baptista', 'dalira.baptista@gmail.com'],
                ['Ralf Pereira', 'ralf.pereira@gmail.com'],
                ['Gerson dos Santos', 'gerson.santos@gmail.com'],
                ['Marco Valerio', 'marco.valerio@gmail.com'],
                ['Jose Augusto', 'jose.augusto@gmail.com'],
                ['Mariana da Silva', 'mariana.silva@gmail.com']
            ];

            conexao.query(operacao, [pessoas],
                function(err) {
                    if (err)
                        throw err;
                    else
                        console.log('Pessoas incluídas com sucesso!!!');
                }
            ); 
        }      
    }
);
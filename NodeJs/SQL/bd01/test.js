const Sequelize = require('sequelize')
const sequelize = new Sequelize('base_dados', 'root', '20M@ppa#root12', {
    host: 'localhost',
    dialect: 'mysql'
});

/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar "+erro);
});
*/

//Models


const Postagem = sequelize.define('postagens', {
    titulo: {
       type: Sequelize.STRING 
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

/*
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
*/

Postagem.create({
    titulo: "Titulo",
    conteudo: "Em terra de cego, quem tem olho nunca e visto."
}).then(function(){
    console.log("Dados inseridos com sucesso");
}).catch(function(erro){
    console.log("Falha ao inserir novos dados. Erro: "+erro);
});

Postagem.sync({force: true})
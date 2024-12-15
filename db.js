const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',  // O banco está rodando localmente?
    username: 'postgres', // Seu nome de usuário
    password: '140595', // Sua senha
    database: 'galeria_opinioes', // O nome do banco de dados
    logging: false
});

// Testa a conexão
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

module.exports = sequelize;

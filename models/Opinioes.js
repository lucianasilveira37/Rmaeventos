const { DataTypes } = require('sequelize');
const sequelize = require('../db');  // Caminho relativo para o arquivo db.js

// Definição do modelo Opinioes
const Opinioes = sequelize.define('Opinioes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mensagem: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data_envio: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW // Definindo um valor default para data_envio
    }
}, {
    tableName: 'opinioes',  // Nome da tabela no banco de dados
    timestamps: false        // Desativa os campos 'createdAt' e 'updatedAt'
});

module.exports = { Opinioes };  // Corrigido para exportar o modelo como um objeto

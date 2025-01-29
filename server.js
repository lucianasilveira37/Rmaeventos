const express = require('express');
const cors = require('cors');
const { Opinioes } = require('./models/Opinioes');  // Importando o modelo correto

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Rota para obter opiniões
app.get('/opinioes', async (req, res) => {
    try {
        const opinioes = await Opinioes.findAll();  // Certifique-se de que 'Opinioes' está correto
        res.json(opinioes);  // Retorna todas as opiniões do banco de dados
    } catch (err) {
        console.error('Erro ao buscar opiniões:', err);
        res.status(500).send('Erro ao buscar opiniões');  // Resposta em caso de erro
    }
});

// Rota para enviar opinião
app.post('/opinioes', async (req, res) => {
    try {
        const { nome, mensagem } = req.body;

        // Verificando se os campos 'nome' e 'mensagem' existem no corpo da requisição
        if (!nome || !mensagem) {
            return res.status(400).send('Nome e mensagem são obrigatórios.');
        }

        const novaOpiniao = await Opinioes.create({ nome, mensagem });  // Criação da nova opinião
        res.status(201).json(novaOpiniao);  // Retorna a nova opinião criada com status 201
    } catch (err) {
        console.error('Erro ao enviar a opinião:', err);
        res.status(500).send('Erro ao enviar a opinião');  // Resposta em caso de erro
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);  // Exibe mensagem de sucesso na inicialização
});

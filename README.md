# **Relatório do Projeto -RMA EVENTOS**
## 1. Ideia Principal do Projeto
O site "RMA EVENTOS" foi criada com o objetivo de divulgar e vender produtos típicos de eventos, como pipocas, algodão doce e mini donuts. O site também serve como uma plataforma de promoção para a atuação da loja em festas, aniversários e outros tipos de celebrações. O principal foco da plataforma é fornecer uma experiência agradável e prática para os clientes, permitindo que eles conheçam os produtos, visualizem imagens e vídeos, além de compartilhar suas opiniões sobre os serviços prestados.

O projeto foi desenvolvido com um design responsivo, oferecendo uma navegação intuitiva e acesso facilitado aos produtos e serviços. Além disso, permite que os usuários compartilhem suas opiniões, o que ajuda a melhorar a qualidade dos serviços oferecidos.

## 2. Funcionalidades Principais
A plataforma oferece as seguintes funcionalidades:

Home: Apresentação de um carrossel com banners promocionais (descontos, novidades, e outras promoções), com o intuito de atrair e engajar os clientes.

Sobre Nós: Uma seção informativa sobre a missão da empresa, sua história e os valores que orientam o trabalho da loja. Inclui imagens da equipe e do ambiente de trabalho.

Galeria de Fotos: Apresentação de imagens dos produtos e dos eventos realizados, para mostrar aos clientes a qualidade e a variedade dos serviços oferecidos.

Galeria de Vídeos: Área dedicada a vídeos da loja, produtos e clientes que utilizaram os serviços em eventos, para dar uma noção mais detalhada de como os produtos são preparados e apresentados.

Galeria de Clientes: Exibição de imagens de clientes e parceiros da loja, ajudando a construir credibilidade e confiança no serviço oferecido.

Formulário de Opiniões: Permite que os clientes compartilhem suas experiências sobre os produtos e serviços, oferecendo feedback valioso para melhorar o atendimento e a qualidade dos serviços.

WhatsApp: Link direto para comunicação com a loja via WhatsApp, facilitando a interação com os clientes e a realização de pedidos.

## 3. Arquitetura do Sistema
O sistema foi estruturado em três partes principais:

### 3.1. Front-End (Interface do Usuário)
Desenvolvimento utilizando HTML, CSS e JavaScript.
Implementação de carrosséis de imagens e vídeos, além de integração com APIs externas (como YouTube).
Formulário de submissão de opiniões com envio de dados para o back-end.
Links para redes sociais e integração com o WhatsApp para facilitar a comunicação.
### 3.2. Back-End (Servidor e API)
Utilização de Node.js para a criação de uma API que lida com armazenamento e recuperação das opiniões enviadas pelos clientes.
Endpoints principais:
GET /opinioes: Para buscar todas as opiniões enviadas pelos clientes.
POST /opinioes: Para enviar uma nova opinião com o nome e a mensagem do cliente.
### 3.3. Banco de Dados
O banco de dados utiliza PostgreSQL para armazenar as opiniões dos clientes. A tabela opinioes foi criada com as seguintes colunas:


CREATE TABLE opinioes (
    id SERIAL PRIMARY KEY,         -- Identificador único para cada comentário
    nome VARCHAR(100),             -- Nome do cliente que deixou a opinião
    mensagem TEXT,                 -- Texto da opinião
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Data e hora de envio (automática)
);
## 4. Tecnologias Utilizadas
### 4.1. Linguagens
HTML: Para a estruturação da página web.
CSS: Para o estilo visual e a criação de uma interface responsiva.
JavaScript: Para interação dinâmica na página, incluindo o carrossel de imagens e a submissão de opiniões.
### 4.2. Banco de Dados
PostgreSQL: Utilizado para armazenar as opiniões dos clientes. O banco de dados é estruturado com uma tabela chamada opinioes, que armazena informações como nome, mensagem e data de envio.
### 4.3. Frameworks
Node.js: Utilizado para o desenvolvimento da API back-end, que permite criar endpoints e gerenciar a comunicação com o banco de dados.
Express.js: Framework utilizado para facilitar a criação dos endpoints da API e o gerenciamento de rotas.
### 4.4. APIs
API do YouTube: Para exibição de vídeos na galeria de vídeos, permitindo que os vídeos sejam integrados diretamente na plataforma.
WhatsApp API: Para fornecer um link de contato direto via WhatsApp, facilitando a comunicação entre clientes e loja.

##5. Funcionamento do Sistema
### 5.1. Telas (Front-End)
Home: Apresenta um carrossel de imagens com banners promocionais, como descontos e novidades, permitindo que o cliente veja as ofertas da loja de forma dinâmica.
![Captura de tela 2025-01-28 210638](https://github.com/user-attachments/assets/544c206b-c8d7-4128-904e-8a5945385feb)



Sobre Nós: Seção informativa que conta a história da loja, seus diferenciais e a missão de oferecer produtos de qualidade para eventos.
![Captura de tela 2025-01-28 210259](https://github.com/user-attachments/assets/458a85fc-76bd-4145-8650-71ca22adb292)

Galeria de Fotos: Apresentação de imagens dos produtos e eventos, permitindo que o cliente tenha uma visão realista da qualidade do serviço.
![Captura de tela 2025-01-28 210347](https://github.com/user-attachments/assets/34a0166b-9122-4b50-992f-000569c97d7f)

Galeria de Vídeos: Área dedicada a vídeos que mostram a loja em ação, os produtos sendo preparados e momentos dos eventos realizados.
![Captura de tela 2025-01-28 210411](https://github.com/user-attachments/assets/74926982-9548-4728-9596-2ddb37805b95)

Galeria de Clientes: Apresentação de clientes e parceiros satisfeitos com os serviços da loja, ajudando a criar confiança e credibilidade.
![Captura de tela 2025-01-28 210439](https://github.com/user-attachments/assets/4d037d05-bb06-4ed5-a91c-c35df2564fdd)

Comentários: Área para que os clientes deixem suas opiniões sobre os serviços, contribuindo para o feedback e a melhoria contínua da empresa.
![Captura de tela 2025-01-28 210511](https://github.com/user-attachments/assets/6bcad56a-9dbc-4a51-afef-7c25bd0aa903)

### 5.2. Endpoints (Back-End)

GET /opinioes: Endpoint que retorna todas as opiniões enviadas pelos clientes.

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

POST /opinioes: Endpoint que permite o envio de novas opiniões com nome e mensagem dos clientes.

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
### 5.3. Banco de Dados
A tabela opinioes é responsável por armazenar as opiniões enviadas pelos clientes, com os seguintes campos:

id: Identificador único para cada opinião.
nome: Nome do cliente que deixou a opinião.
mensagem: Conteúdo da opinião.
data: Data e hora de envio da opinião.

## 6. Conclusão
O projeto "RMA Eventos" foi desenvolvido para ser uma plataforma atrativa e funcional, oferecendo aos clientes uma experiência única e personalizada. O site não apenas permite a venda de produtos típicos para eventos, como pipocas, algodão doce e mini donuts, mas também proporciona uma área interativa, onde os clientes podem visualizar imagens e vídeos, compartilhar suas opiniões e entrar em contato diretamente com a loja via WhatsApp.

As tecnologias utilizadas no desenvolvimento, como Node.js, Express.js, PostgreSQL, e integração com APIs externas (YouTube, WhatsApp), garantem um sistema eficiente e fluido, tanto no front-end quanto no back-end. A principal meta da plataforma é não apenas gerar vendas, mas também criar um vínculo mais estreito com os clientes, proporcionando uma experiência de compra agradável e confiável.

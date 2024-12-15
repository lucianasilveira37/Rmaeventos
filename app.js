document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-opiniao');
    const nomeInput = document.getElementById('nome');
    const mensagemInput = document.getElementById('mensagem');
    const listaOpinioes = document.getElementById('lista-opinioes');

    // Função para exibir as opiniões
    async function exibirOpinioes() {
        try {
            const response = await fetch('http://localhost:3000/opinioes');

            // Verificar se a resposta é bem-sucedida (status 200-299)
            if (!response.ok) {
                throw new Error(`Erro ao carregar as opiniões: ${response.statusText}`);
            }

            const opinioes = await response.json();

            listaOpinioes.innerHTML = ''; // Limpa as opiniões anteriores

            opinioes.forEach(opiniao => {
                const div = document.createElement('div');
                div.classList.add('opiniao');
                div.innerHTML = `
                    <h3>${opiniao.nome}</h3>
                    <p>${opiniao.mensagem}</p>
                    <small>${new Date(opiniao.data_envio).toLocaleString()}</small>
                `;
                listaOpinioes.appendChild(div);
            });
        } catch (err) {
            console.error(err);
            listaOpinioes.innerHTML = `<p class="erro">Não foi possível carregar as opiniões. Tente novamente mais tarde.</p>`;
        }
    }

    // Enviar opinião para o servidor
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nome = nomeInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        // Verificar se os campos não estão vazios
        if (!nome || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/opinioes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, mensagem })
            });

            // Verificar se a resposta é bem-sucedida (status 200-299)
            if (response.ok) {
                await exibirOpinioes(); // Recarregar as opiniões após o envio
                form.reset(); // Limpar o formulário
            } else {
                throw new Error('Erro ao enviar a opinião');
            }
        } catch (err) {
            console.error(err);
            alert('Não foi possível enviar a opinião. Tente novamente mais tarde.');
        }
    });

    // Carregar as opiniões ao carregar a página
    exibirOpinioes();
});

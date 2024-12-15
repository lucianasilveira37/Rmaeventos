/// Função para buscar e exibir as opiniões
function carregarOpinioes() {
    fetch('http://localhost:3000/opinioes')
        .then(response => response.json())
        .then(data => {
            const listaOpinioes = document.getElementById('lista-opinioes');
            listaOpinioes.innerHTML = '';  // Limpa a lista antes de adicionar novas opiniões
            data.forEach(opiniao => {
                const card = document.createElement('div');
                card.classList.add('card');
                const dataEnvio = new Date(opiniao.data_envio);
                card.innerHTML = `
                    <h3>${opiniao.nome}</h3>
                    <p>${opiniao.mensagem}</p>
                    <small>Enviado em: ${dataEnvio.toLocaleString()}</small>
                `;
                listaOpinioes.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar as opiniões:', error));
}

// Carrega as opiniões assim que a página for carregada
window.onload = carregarOpinioes;

// Enviar a opinião para o servidor
document.getElementById('form-opiniao').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o comportamento padrão do formulário
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe a mensagem de feedback
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.style.display = 'none'; // Esconde a mensagem anterior

    fetch('http://localhost:3000/opinioes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, mensagem })
    })
    .then(response => response.json())
    .then(data => {
        feedbackMessage.style.display = 'block';
        feedbackMessage.textContent = 'Sua opinião foi enviada com sucesso!';
        feedbackMessage.style.color = 'green';  // Mensagem de sucesso (verde)

        // Limpa os campos
        document.getElementById('nome').value = '';
        document.getElementById('mensagem').value = '';

        // Atualiza a lista de opiniões
        carregarOpinioes();
    })
    .catch(error => {
        feedbackMessage.style.display = 'block';
        feedbackMessage.textContent = 'Ocorreu um erro ao enviar a sua opinião. Tente novamente.';
        feedbackMessage.style.color = 'red';  // Mensagem de erro (vermelho)
    });
});



// Função para atualizar os vídeos na galeria
let currentIndex = 0;
const videoIds = [
    'l5lMjVgDo4U', '8qFlCBuWAL0', 'yaXGTKGqvG4', 'LBgWh6g8TeE',
    'p2WaEjiX7Qc', 'a4VHWfDjUvU', 'nMN7p0zjcb8', 'ZINB0iwX_Qc',
    '9n5EuysRjJ8', 'IUMarmTy_Jc', 'Mk7g-YiK8jU', 'dsHdAjZ7Kd0'
];

// Atualiza os vídeos na galeria
function atualizarVideos() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe, index) => {
        const videoId = videoIds[index];
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
    });
}

// Função para atualizar o carrossel
const images = document.querySelectorAll('.carousel-posts img');
const totalImages = images.length;

function updateCarousel() {
    const carouselPosts = document.querySelector('.carousel-posts');
    const offset = -currentIndex * 100; // Desloca as imagens
    carouselPosts.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

// Função para ir para a imagem anterior
function prevImage() {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateCarousel();
}

// Função para ir para a próxima imagem
function nextImage() {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

// Função para transição automática
function autoSlide() {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

// Event listeners para os botões
document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);

// Inicia a transição automática a cada 3 segundos (3000 ms)
setInterval(autoSlide, 3000);

// Inicializa o carrossel
updateCarousel();

// Script para o menu e navegação
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");

    // Adiciona evento para alternar a classe 'open' no menu
    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("open");
    });

    // Fecha o menu se o usuário clicar em qualquer link do menu
    const navLinks = document.querySelectorAll(".nav-list a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navList.classList.remove("open"); // Fecha o menu após o clique
        });
    });

    // Adiciona rolagem suave ao clicar nos links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Previne o comportamento padrão de ancoragem
            
            const targetId = link.getAttribute('href').substring(1);  // Pega o ID do destino
            const targetElement = document.getElementById(targetId);  // Encontra o elemento com o ID
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 20;  // Subtrai 20px para garantir que o título fique visível no topo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'  // Rolagem suave
                });
            }
        });
    });

    // Carregar as opiniões assim que a página carregar
    carregarOpinioes();
    atualizarVideos();
});

import Bola from "./Bola.js";
import Direcao from "./Direcao.js";
import Jogador from "./Jogador.js";

const canvas = document.getElementById("canva");
const ctx = canvas.getContext('2d');

// Configuração inicial do canvas
canvas.width = innerWidth;
canvas.height = innerHeight;

// Instâncias das classes principais
const direcao = new Direcao();
const jogador1 = new Jogador('esquerda', canvas, direcao);
const jogador2 = new Jogador('direita', canvas, direcao);
const bola = new Bola(6, direcao, canvas);
bola.movimentacaoX = direcao.direita; // Começa indo para a direita
bola.movimentacaoY = direcao.baixo;  // Começa indo para baixo

// Inicializa as pontuações
jogador1.pontuacao = 0;
jogador2.pontuacao = 0;

// Configuração de eventos de teclado jogador 1
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') jogador1.movimento = direcao.cima;
    if (event.key === 'ArrowDown') jogador1.movimento = direcao.baixo;
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') jogador1.movimento = null;
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'w') jogador2.movimento = direcao.cima;
    if (event.key === 's') jogador2.movimento = direcao.baixo;
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'w' || event.key === 's') jogador2.movimento = null;
});


// Configuração de eventos de teclado jogador 2

// Início do loop de animação
gameLoop();

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop); 
}

function resetBola() {
    bola.x = canvas.width / 2;
    bola.y = canvas.height / 2;
    bola.movimentacaoX = Math.random() > 0.5 ? direcao.direita : direcao.esquerda;
    bola.movimentacaoY = Math.random() > 0.5 ? direcao.cima : direcao.baixo;
}

function update() {
    // Atualiza a posição vertical da bola caso haja colisão
    if (bola.y <= 0) bola.movimentacaoY = direcao.baixo;
    if (bola.y >= canvas.height - bola.altura) bola.movimentacaoY = direcao.cima;

    // Verifica se a bola saiu pelos limites laterais (pontuação)
    if (bola.x <= 0) {
        jogador2.pontuacao += 1;
        resetBola();
    }

    if (bola.x >= canvas.width - bola.largura) {
        jogador1.pontuacao += 1;
        resetBola();
    }

    // Movimento do jogador 1 por eventos de teclado
    if (jogador1.movimento === direcao.cima) jogador1.y -= jogador1.velocidade;
    else if (jogador1.movimento === direcao.baixo) jogador1.y += jogador1.velocidade;

    // Limita o movimento do jogador 1 às bordas do canvas
    jogador1.y = Math.max(0, Math.min(jogador1.y, canvas.height - jogador1.altura));

    // Movimento da bola
    if (bola.movimentacaoY === direcao.cima) bola.y -= bola.velocidade / 1.5;
    else if (bola.movimentacaoY === direcao.baixo) bola.y += bola.velocidade / 1.5;

    if (bola.movimentacaoX === direcao.esquerda) bola.x -= bola.velocidade;
    else if (bola.movimentacaoX === direcao.direita) bola.x += bola.velocidade;

    // Movimento do jogador 2  
    if (jogador2.movimento === direcao.cima) jogador2.y -= jogador2.velocidade;
    else if (jogador2.movimento === direcao.baixo) jogador2.y += jogador2.velocidade;

    // Limita o movimento do jogador 2 às bordas do canvas
    jogador2.y = Math.max(0, Math.min(jogador2.y, canvas.height - jogador2.altura));

    // Colisão jogador 1 e bola
    if (
        bola.x - bola.largura <= jogador1.x &&
        bola.x >= jogador1.x - jogador1.largura &&
        bola.y <= jogador1.y + jogador1.altura &&
        bola.y + bola.altura >= jogador1.y
    ) {
        bola.x = jogador1.x + bola.largura;
        bola.movimentacaoX = direcao.direita;
    }

    // Colisão jogador 2 e bola
    if (
        bola.x + bola.largura >= jogador2.x &&
        bola.x <= jogador2.x + jogador2.largura &&
        bola.y <= jogador2.y + jogador2.altura &&
        bola.y + bola.altura >= jogador2.y
    ) {
        bola.x = jogador2.x - bola.largura;
        bola.movimentacaoX = direcao.esquerda;
    }
}

function draw() {
    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha o fundo
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Configura a cor dos elementos
    ctx.fillStyle = "red";

    // Desenha os jogadores
    ctx.fillRect(jogador1.x, jogador1.y, jogador1.largura, jogador1.altura);
    ctx.fillRect(jogador2.x, jogador2.y, jogador2.largura, jogador2.altura);

    // Desenha a bola
    ctx.fillRect(bola.x, bola.y, bola.largura, bola.altura);

    // Configura a fonte e alinha o texto para pontuação
    ctx.font = '100px Courier New';
    ctx.fillStyle = "white";
    ctx.textAlign = 'center';

    // Exibe a pontuação dos jogadores
    ctx.fillText(jogador1.pontuacao.toString(), canvas.width / 2 - 300, 200);
    ctx.fillText(jogador2.pontuacao.toString(), canvas.width / 2 + 300, 200);
}

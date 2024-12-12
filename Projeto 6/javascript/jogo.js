import Bola from "./Bola.js";
import Direcao from "./Direcao.js";
import Jogador from "./Jogador.js";


const canvas = document.getElementById("canva");
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


const direcao = new Direcao;

const jogador1 = new Jogador('esquerda',canvas,direcao);
const jogador2 = new Jogador('direita',canvas,direcao);
const bola = new Bola(1,direcao,canvas);

ctx.fillStyle = "red";
ctx.fillRect(jogador1.x,jogador1.y,jogador1.largura,jogador1.altura);

ctx.fillRect(jogador2.x,jogador2.y,jogador2.largura,jogador2.altura);

ctx.fillRect(bola.x,bola.y,bola.largura,bola.altura);










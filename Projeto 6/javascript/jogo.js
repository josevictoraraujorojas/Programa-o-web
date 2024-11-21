let tabuleiro = document.createElement("canvas");
const largura = 1000;
const altura = 1000;
document.body.appendChild(tabuleiro);

tabuleiro.style.width = largura+"px";
tabuleiro.style.height = altura+"px";
tabuleiro.style.backgroundColor = "black"

let cobra = [{ x: 5, y: 5 },{ x: 4, y: 5 }];

const ctx = tabuleiro.getContext("2d");

const larguraCobra =10;
const alturaCobra = 2

function desenhaCobra(direcao) {
    // Limpa o canvas antes de desenhar
    ctx.fillStyle = "green"; // Cor da cobra
    
    // Desenhar cada segmento da cobra
    for (let segmento of cobra) {
        ctx.clearRect(segmento.x-1, segmento.y-1, largura, altura);
        ctx.fillRect(segmento.x, segmento.y ,larguraCobra, alturaCobra);
    }
}

desenhaCobra();
let direcao;

document.addEventListener("keydown", function(event) {

    switch(event.key){
        case 'd':
            direcao = "direita";
            break;
        case 'a':  
        direcao = "esquerda";  
            break;

        case 'w':
            direcao = "cima";  
        break
        case 's':
            direcao = "baixo"; 
        break


    }
   });

   intervalo = setInterval(function() {
    for(i=0;i<cobra.length;i++){
        switch (direcao) {
            case "direita":
            cobra[i].x++;
            desenhaCobra(direcao);
            break;

            case "esquerda":
            cobra[i].x--;
            desenhaCobra(direcao);
            break;

            case "cima":
            cobra[i].y--;
            desenhaCobra(direcao);
            break;

            case "baixo":
            cobra[i].y++;
            desenhaCobra(direcao);
            break;

            default:
            cobra[i].x++;
            desenhaCobra(direcao);
            break;
        }
         }
        
    }, 30);






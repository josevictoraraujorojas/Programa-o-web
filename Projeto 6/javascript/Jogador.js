class Jogador{
    constructor(lado,canvas,direcao){
        this.largura= 18;
        this.altura= 180;
        this.x= lado === 'esquerda' ? 150 : canvas.width - 150;
        this.y= (canvas.height / 2) - 35;
        this.pontuacao= 0;
        this.movimento= direcao.parado;
        this.velocidade= 8;
    }
}
export default Jogador;
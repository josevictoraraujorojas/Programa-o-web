class Bola {

    constructor(contadorVelocidade, direcao,canvas) {
        this.largura= 18;
        this.altura= 18;
        this.x= (canvas.width / 2) - 9;
        this.y= (canvas.height / 2) - 9;
        this.movimentacaX= direcao.parado;
        this.movimentacaoY= direcao.parado;
        this.velocidade= contadorVelocidade || 7;

    }
}
export default Bola;
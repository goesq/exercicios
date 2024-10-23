class Carro{
    constructor(){
        this.marca,
        this.modelo,
        this.ano,
        this.motorLigado
    }
    ligarMotor(){
        this.motorLigado = true
    }
    desligarMotor(){
        this.motorLigado = false
    }
    statusMotor(){
        console.log(`Carro ligado: ${this.motorLigado}`)
    }
}

const carrinho = new Carro()
carrinho.marca = "Volkswagen"
carrinho.modelo = "Jetta"
carrinho.ano = 2024

carrinho.ligarMotor()
carrinho.statusMotor()

carrinho.desligarMotor()
carrinho.statusMotor()
class Automovel{
    constructor(){
        this.cor,
        this.modelo,
        this.combustivel,
        this.qtdrodas,
        this.motorLigado
    }

    ligarMotor(){
        this.motorLigado = true
    }

    desligarMotor(){
        this.motorLigado = false
    }

    statusMotor(){
        console.log(`Motor ligado: ${this.motorLigado}`)
    }
}

class Carro extends Automovel{
    constructor(){
        super(),
        this.vidroAberto
    }

    abrirVidro(){
        this.vidroAberto = true
    }

    fecharVidro(){
        this.vidroAberto = false
    }

    statusVidro(){
        console.log(`Vidro aberto: ${this.vidroAberto}`)
    }

}

class Moto extends Automovel{
    constructor(){
        super()
    }
}

class Caminhao extends Automovel{
    constructor(){
        super(),
        this.vidroAberto
    }

    abrirVidro(){
        this.vidroAberto = true
    }

    fecharVidro(){
        this.vidroAberto = false
    }

    statusVidro(){
        console.log(`Vidro aberto: ${this.vidroAberto}`)
    }
}

const carrinho = new Carro()
const motinha = new Moto()
const caminhaozinho = new Caminhao()

console.log("Mais informações")
carrinho.cor = "Prata"
carrinho.modelo = "Corolla"
carrinho.combustivel = "Híbrido"
carrinho.qtdrodas = 4

carrinho.ligarMotor()
carrinho.statusMotor()
carrinho.desligarMotor()
carrinho.statusMotor()


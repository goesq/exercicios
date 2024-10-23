class Pessoa{
    constructor(){
        this.nome,
        this.idade,
        this.profissao,
        this.salario
    }

    exibeTrabalho(nomeEmpresa, tempoTrabalho){
        console.log(`Empresa: ${nomeEmpresa}, Tempo de trabalho: ${tempoTrabalho} anos`)
    }
}

const pessoa1 = new Pessoa()
pessoa1.nome = "Pedro"
pessoa1.idade = 22      
pessoa1.profissao = "tecnico senior"
pessoa1.salario = 2200

pessoa1.exibeTrabalho("SENAI", 5)
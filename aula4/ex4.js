class Animal {
    constructor() {
      this.nome = null;
      this.idade = null;
    }
    
    fazerSom() {
      console.log(`${this.nome} faz um som.`);
    }
  }

  class Cachorro extends Animal {
    constructor() {
        super();
        this.raca = null;
     
    }

    fazerSom() {
      console.log(`${this.nome} late.`);
    }

    exibirInfo() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`);
    }
  }
  const Rocky = new Cachorro();
  Rocky.nome = "Rocky";
  Rocky.idade = "2";
  Rocky.raca = "Amstaff";
  Rocky.exibirInfo();
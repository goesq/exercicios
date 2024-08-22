class Usuario{
    constructor(){
        this.nome=null;
        this.idade;
    }
    exibeinfo(){
        console.log(`Nome ${this.nome}, idade ${this.idade}`);
    }
}
class cliente extends Usuario{
    constructor(){
        super();
               

        this.cargo = null;
    }
    exibeinfocargo(){
        console.log(`Nome ${this.nome}, idade ${this.idade}, cargo ${this.cargo}`);
    }

}

const Daniel = new cliente();
Daniel.nome="Victor";
Daniel.idade = 18;
Daniel.cargo= "Administrador";
const Daniel1 = new Usuario();
Daniel1.nome = "Ronaldo";
Daniel1.idade = 20;
Daniel.exibeinfocargo()
Daniel1.exibeinfo();
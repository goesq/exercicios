const pessoa = {
    nome: "Victor Goes",
    dataNascimento: "14/06/2006",
    carteiraIdentidade: "214659-X",
    email: "victorgoes154@gmail.com",
    telefone: "+55 19983068250",
    cidade: "Campinas",
    estado: "SP",
    seguroSocial: "1234-567-9",
    cpf: "9632587412-35"
}

console.log(pessoa.cpf.substring(0,4) + "*******")
console.log(pessoa.carteiraIdentidade.substring(0,4) + "****")
   
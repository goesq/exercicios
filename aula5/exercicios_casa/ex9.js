const anoAtual = new Date().getFullYear()

const livro = {
    "título": 'O que resta de nós',
    "autor": 'Julia da Rosa Simões',
    "anoDePublicação": 2024,
    "gênero": 'Ficção',
    "idadePublicacao": anoAtual - 2024
}

livro["gênero"] = "Ficção"
console.log(livro)
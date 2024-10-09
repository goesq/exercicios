const livro = {}

const anoAtual = new Date().getFullYear()

livro.titulo = "Torto arado"
livro.autor = "Itamar Vieira Junior"
livro.anoPublicacao = 2019
livro.genero = "Realismo mágico"
livro.idadePublicacao = anoAtual - livro.anoPublicacao 

console.log(livro["titulo"])
console.log(livro["autor"])
console.log(livro["anoPublicacao"])
console.log(livro["genero"])
console.log(livro["idadePublicacao"])
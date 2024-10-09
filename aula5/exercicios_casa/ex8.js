const livro = {}

const anoAtual = new Date().getFullYear()

livro.titulo = "Torto arado"
livro.autor = "Itamar Vieira Junior"
livro.anoPublicacao = 2019
livro.genero = "Realismo mágico"
livro.idadePublicacao = anoAtual - livro.anoPublicacao 
livro.avaliacao = null



if (livro.avaliacao == null){
    livro.avaliacao = "4.5 estrelas"
    console.log(livro)
} else {
    console.log("O livro já tem uma avaliação")
}
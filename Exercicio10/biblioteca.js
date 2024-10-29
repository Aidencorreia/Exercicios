class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.disponivel = true;
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            return `${this.titulo} emprestado com sucesso.`;
        }
        return `${this.titulo} não está disponível.`;
    }

    devolver() {
        this.disponivel = true;
        return `${this.titulo} devolvido com sucesso.`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    livrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }

    filtrarPorGenero(genero) {
        return this.livros.filter(livro => livro.genero === genero);
    }
}

// Teste
const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia"));
biblioteca.adicionarLivro(new Livro("1984", "George Orwell", "Distopia"));

const livroEmprestado = biblioteca.livros[0];
console.log(livroEmprestado.emprestar()); // Empresta o livro
console.log(biblioteca.livrosDisponiveis()); // Lista livros disponíveis

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    
    getInfo() {
        return `${this.titulo} por ${this.autor}, publicado em ${this.anoPublicacao}`;
    },
    
    isClassico() {
        return this.anoPublicacao < 1990;
    }
};

console.log(livro.getInfo()); // Deve mostrar: "O Senhor dos Anéis por J.R.R. Tolkien, publicado em 1954"
console.log(livro.isClassico()); // Deve mostrar: true


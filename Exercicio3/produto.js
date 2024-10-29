class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    
    // Método para aplicar desconto
    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }
    
    // Método para mostrar detalhes do produto
    mostrarDetalhes() {
        return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
    }
}

// Testando a classe Produto
const produto = new Produto("Notebook", 3000, "Eletrônicos");
console.log(produto.mostrarDetalhes()); // Output: Produto: Notebook, Preço: R$3000.00, Categoria: Eletrônicos
produto.aplicarDesconto(10);
console.log(produto.mostrarDetalhes()); // Output: Produto: Notebook, Preço: R$2700.00, Categoria: Eletrônicos

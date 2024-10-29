// Classe Produto
class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    
    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }
    
    mostrarDetalhes() {
        return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
    }
}

// Classe Eletronico herdando de Produto
class Eletronico extends Produto {
    constructor(nome, preco, categoria, garantia) {
        super(nome, preco, categoria); // Chamando o construtor da classe pai
        this.garantia = garantia;
    }
    
    // Método para mostrar detalhes incluindo a garantia
    mostrarDetalhes() {
        return `${super.mostrarDetalhes()}, Garantia: ${this.garantia} anos`;
    }
}

// Testando a herança
const celular = new Eletronico("Smartphone", 2500, "Eletrônicos", 2);
console.log(celular.mostrarDetalhes()); // Output: Produto: Smartphone, Preço: R$2500.00, Categoria: Eletrônicos, Garantia: 2 anos
celular.aplicarDesconto(15);
console.log(celular.mostrarDetalhes()); // Output: Produto: Smartphone, Preço: R$2125.00, Categoria: Eletrônicos, Garantia: 2 anos

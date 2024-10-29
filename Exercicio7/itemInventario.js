class ItemInventario {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    calcularValorTotal() {
        return this.quantidade * this.preco;
    }
}

const inventario = {
    itens: [
        new ItemInventario("Cadeira", 10, 50),
        new ItemInventario("Mesa", 5, 100),
        new ItemInventario("Monitor", 20, 200)
    ],
    
    calcularValorTotalInventario() {
        return this.itens.reduce((total, item) => total + item.calcularValorTotal(), 0);
    }
};

// Teste
console.log(inventario.calcularValorTotalInventario()); // Output: Valor total do inventário

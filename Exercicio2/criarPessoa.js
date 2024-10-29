function criarPessoa(nome, idade, profissao) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao,
        
        // Método para saudar
        saudar() {
            return `Olá, meu nome é ${this.nome}.`;
        },
        
        // Método para mostrar informações
        mostrarInfo() {
            return `Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`;
        }
    };
}

// Testando a função fábrica
const pessoa1 = criarPessoa("Carlos", 29, "Engenheiro");
console.log(pessoa1.saudar()); // Output: Olá, meu nome é Carlos.
console.log(pessoa1.mostrarInfo()); // Output: Nome: Carlos, Idade: 29, Profissão: Engenheiro

const pessoa2 = criarPessoa("Ana", 35, "Médica");
console.log(pessoa2.saudar()); // Output: Olá, meu nome é Ana.
console.log(pessoa2.mostrarInfo()); // Output: Nome: Ana, Idade: 35, Profissão: Médica

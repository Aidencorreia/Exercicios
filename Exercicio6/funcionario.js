class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.salario + this.bonus;
    }
}

// Teste
const funcionario = new Funcionario("Carlos", 3000);
console.log(funcionario.calcularSalario()); // Output: 3000

const gerente = new Gerente("Ana", 5000, 2000);
console.log(gerente.calcularSalario()); // Output: 7000

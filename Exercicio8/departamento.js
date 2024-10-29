class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, projetoAtual) {
        super(nome, salario);
        this.projetoAtual = projetoAtual;
    }
}

class Designer extends Funcionario {
    constructor(nome, salario, portifolio) {
        super(nome, salario);
        this.portifolio = portifolio;
    }
}

class Departamento {
    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    removerFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(f => f.nome !== nome);
    }
}

// Teste
const dept = new Departamento();
dept.adicionarFuncionario(new Desenvolvedor("Lucas", 4000, "Site ABC"));
dept.adicionarFuncionario(new Designer("Mariana", 3500, "Portifolio XYZ"));
console.log(dept.funcionarios);

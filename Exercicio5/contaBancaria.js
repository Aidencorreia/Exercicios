class ContaBancaria {
    #saldo; // Propriedade privada
    #titular;

    constructor(titular, saldoInicial = 0) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }

    verSaldo() {
        return `Saldo atual: R$${this.#saldo.toFixed(2)}`;
    }
}

// Teste
const conta = new ContaBancaria("João", 100);
conta.depositar(50);
conta.sacar(20);
console.log(conta.verSaldo()); // Output: Saldo atual: R$130.00

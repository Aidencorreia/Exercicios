class Quarto {
    constructor(numero, tipo, preco) {
        this.numero = numero;
        this.tipo = tipo;
        this.preco = preco;
        this.disponivel = true;
    }

    reservar() {
        if (this.disponivel) {
            this.disponivel = false;
            return "Reserva realizada com sucesso!";
        }
        return "Quarto indisponível!";
    }

    cancelarReserva() {
        this.disponivel = true;
        return "Reserva cancelada!";
    }
}

class QuartoSimples extends Quarto {
    constructor(numero) {
        super(numero, "Simples", 100);
    }
}

class SuiteLuxo extends Quarto {
    constructor(numero) {
        super(numero, "Luxo", 300);
    }
}

class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartos = [];
    }

    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
    }

    verDisponibilidade() {
        return this.quartos.filter(quarto => quarto.disponivel);
    }
}

// Teste
const hotel = new Hotel("Hotel Central", "Centro");
hotel.adicionarQuarto(new QuartoSimples(101));
hotel.adicionarQuarto(new SuiteLuxo(201));
console.log(hotel.verDisponibilidade()); // Lista de quartos disponíveis

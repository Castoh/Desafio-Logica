class heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
}

if (tipo === "guerreiro") {
    this.ataque = espada;
} else if (tipo === "mago") {
    this.ataque = 'magia';
} else if (tipo === "monge") {
    this.ataque = 'artes marciais';
} else if (tipo === "ninja") {
    this.ataque = 'shurikken';
}

console.log(`O herói ${this.nome}, de ${this.idade} anos, é um ${this.tipo} que ataca com ${this.ataque}.`);
function calcular_derrotas_vitorias (vitorias, derrotas) {
    console.log ("Você tem tantas vitorias: " + vitorias + " e tantas derrotas: " + derrotas);
    let resultado = vitorias - derrotas;
    return resultado
}

calcular_derrotas_vitorias(5, 10);
calcular_derrotas_vitorias(15, 1);
calcular_derrotas_vitorias(50, 60);
calcular_derrotas_vitorias(500, 100);
calcular_derrotas_vitorias(85, 35);

if (resultado <= 10) {
    console.log(nome + "está no ranque Ferro");
} else if (11 <= 20) {
    console.log(nome + " está no ranque Bronze");
} else if (21 <= 50) {
    console.log(nome + " está no ranque Prata");
} else if (61 <= 80) {
    console.log(nome + " está no ranque Ouro");
} else if (81 <= 90) {
    console.log(nome + " está no ranque Diamante");
} else if (91 <= 100) {
    console.log(nome + " está no ranque Lendário");
} else if (resultado > 101) {
    console.log(nome + " está no ranque Imortal");
} 

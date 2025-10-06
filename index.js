let nome = "João";
let xp = 0;

if (xp <= 1000) {
    console.log(nome + "está no ranque Ferro");
} else if (1001 <= 2000) {
    console.log(nome + " está no ranque Bronze");
} else if (2001 <= 5000) {
    console.log(nome + " está no ranque Prata");
} else if (6001 <= 7000) {
    console.log(nome + " está no ranque Ouro");
} else if (7001 <= 8000) {
    console.log(nome + " está no ranque Platina");
} else if (8001 <= 9000) {
    console.log(nome + " está no ranque Ascendente");
} else if (9001 <= 10000) {
    console.log(nome + " está no ranque Imortal");
} else if (xp > 10001) {
    console.log(nome + " está no ranque Radiante");
}

console;log("O nome do héroi é " + nome + " e ele está no ranque com " + xp + " pontos de experiência.");
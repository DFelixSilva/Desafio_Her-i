// Variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = "Nome do Herói";
let xp = 7500; // Exemplo de XP

// Estrutura de decisão para determinar a classificação do herói com base na XP
let classificacao;

if (xp < 1000) {
    classificacao = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    classificacao = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    classificacao = "Prata";
} else if (xp >= 5001 && xp <= 8000) {
    classificacao = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    classificacao = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    classificacao = "Imortal";
} else if (xp >= 10001) {
    classificacao = "Radiante";
}

// Exibe a classificação do herói
console.log(`O herói ${nomeHeroi} tem uma classificação de ${classificacao}.`);

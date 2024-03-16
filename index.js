/* 
Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

// Mensagem de apresentação do programa
console.log("Bem vindo ao Desafio de Projeto 1: Classificador de Nível de Herói")

// Entrada de dado: Prompt para obter o nome e a XP do herói por parte do usuário
const heroiNome = prompt("Digite o nome do herói:");
const heroiXP = parseInt(prompt("Digite a quantidade de XP do herói:"));

// Declaração da variável que contém o nível do herói
let heroiNivel = "";

// Estrutura de decisão para determinar o nível do herói com base na XP
if (heroiXP < 1000) {
    heroiNivel = "Ferro";
} else if (heroiXP >= 1001 && heroiXP <= 2000) {
    heroiNivel = "Bronze";
} else if (heroiXP >= 2001 && heroiXP <= 5000) {
    heroiNivel = "Prata";
} else if (heroiXP >= 5001 && heroiXP <= 7000) {
    heroiNivel = "Ouro";
} else if (heroiXP >= 7001 && heroiXP <= 8000) {
    heroiNivel = "Platina Diamante";
} else if (heroiXP >= 8001 && heroiXP <= 9000) {
    heroiNivel = "Ascendente";
} else if (heroiXP >= 9001 && heroiXP <= 10000) {
    heroiNivel = "Imortal";
} else {
    heroiNivel = "Radiante";
}

// Saída do Programa: Exibição da mensagem com o nome e o nível do herói
console.log("O Herói de nome ${heroiNome} está no nível ${heroiNivel}.");
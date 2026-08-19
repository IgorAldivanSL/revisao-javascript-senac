/*
  EXERCÍCIO 02 — CALCULADORA DE MÉDIA
*/

const nomeAluno = "Aluno Exemplo";

// TODO:
// Crie quatro variáveis/constantes para armazenar as notas.
const nota1 = 7;
const nota2 = 8;
const nota3 = 6.5;
const nota4 = 9;

// TODO:
// Calcule a soma das quatro notas.
const soma = nota1 + nota2 + nota3 + nota4;

// TODO:
// Calcule a média aritmética.
const media = soma / 4;

// TODO:
// Exiba no console:
// Nome do aluno
// Notas
// Média final
console.log(`Nome do aluno: ${nomeAluno}`);
console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);

// DESAFIO:
// Formate a média com duas casas decimais.
console.log(`Média final: ${media.toFixed(2)}`);

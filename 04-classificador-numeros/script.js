/*
  EXERCÍCIO 04 — CLASSIFICADOR DE NÚMEROS
*/

function classificarNumero(numero) {
  // TODO:
  // Descubra se o número é positivo, negativo ou zero.
  if (numero > 0) {
    classificacao = "positivo";
  } else if (numero < 0) {
    classificacao = "negativo";
  } else {
    classificacao = "zero";
  }

  // TODO:
  // Quando o número não for zero, descubra também se ele é par ou ímpar.
  if (numero !== 0) {
    if (numero % 2 === 0) {
      classificacao += " e par";
    } else {
      classificacao += " e ímpar";
    }
  }

  // TODO:
  // Retorne uma mensagem com a classificação.
  return `O número ${numero} é ${classificacao}.`;
}

// TODO:
// Teste a função com pelo menos cinco valores diferentes.
console.log(classificarNumero(10));
console.log(classificarNumero(-5));
console.log(classificarNumero(0));
console.log(classificarNumero(7));
console.log(classificarNumero(-8));
/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Não é possível dividir por zero";
  }

  return a / b;
}



function calcular(a, b, operacao) {
  if(operacao === 'somar'){
    return somar(a,b)
  }else if(operacao === 'subtrair'){
    return subtrair(a,b)
  }else if(operacao === 'multiplicar'){
    return multiplicar(a,b)
  }else if(operacao === 'dividir'){
    return dividir(a,b)
  }else{
    return "Erro! operação invalida"
  }
}



// TODO:
// Identifique quais funções podem utilizar retorno implícito.

// TODO:
// Crie uma arrow function calcular() mantendo o comportamento do exercício anterior.
const calcularSoma = (a, b) => a = b;
const calcularSubtracao = (a, b) => a - b;
const calcularMultiplicacao = (a, b) => a * b;
const calcularDivisaõ = (a =b) => b === 0? 'Erro': a/b;

console.log(calcularSoma(5 ,5));
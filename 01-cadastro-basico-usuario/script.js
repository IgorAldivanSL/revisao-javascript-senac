/*
  EXERCÍCIO 01 — CADASTRO BÁSICO DE USUÁRIO
*/

// TODO 1:
// Crie uma constante para armazenar o nome do usuário.
const nomeUsuario = "Igor";

// TODO 2:
// Crie uma variável para armazenar a idade.
let idade = 20;

// TODO 3:
// Crie uma constante para o e-mail.
const email = "igor@gmail.com";

// TODO 4:
// Crie uma variável booleana indicando se o usuário está logado.
let estaLogado = true;

// TODO 5:
// Crie uma variável chamada ultimoAcesso.
// Defina um valor adequado entre null ou undefined e pense no motivo.
let ultimoAcesso = null;

// TODO 6:
// Mostre no console uma frase contendo todos os dados usando template literal.
console.log(`Nome: ${nomeUsuario}, Idade: ${idade}, E-mail: ${email}, Logado: ${estaLogado}, Último acesso: ${ultimoAcesso}`);

// TODO 7:
// Utilize typeof para verificar o tipo de cada variável criada.
console.log(typeof nomeUsuario);
console.log(typeof idade);
console.log(typeof email);
console.log(typeof estaLogado);
console.log(typeof ultimoAcesso);
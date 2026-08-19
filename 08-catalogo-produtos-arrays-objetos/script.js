/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque
const produtos = [
  {
    id: 1,
    nome: "Maçã",
    preco: 5.50,
    categoria: "Fruta",
    emEstoque: true
  },
  {
    id: 2,
    nome: "Banana",
    preco: 4.00,
    categoria: "Fruta",
    emEstoque: true
  },
  {
    id: 3,
    nome: "Pera",
    preco: 6.00,
    categoria: "Fruta",
    emEstoque: false
  },
  {
    id: 4,
    nome: "Uva",
    preco: 8.50,
    categoria: "Fruta",
    emEstoque: true
  },
  {
    id: 5,
    nome: "Melancia",
    preco: 12.00,
    categoria: "Fruta",
    emEstoque: true
  }
];


// TODO:
// Percorra o array com for, for...of ou forEach().

for (const prod of produtos) {
  let message = `${prod.id} - ${prod.nome}
  | Categoria: ${prod.categoria} | Preço: R$${prod.preco} | Em Estoque: ${prod.emEstoque ? 'SIM' : 'NÃO'}`;
}

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.


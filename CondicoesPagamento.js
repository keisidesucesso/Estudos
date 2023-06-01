/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/
const prompt = require('prompt-sync')({ sigint: true });

const precoProduto = parseFloat(prompt('digite o preço do produto: '));
const formaPagamento = prompt(
  'Escolha uma forma de pagamento:\n 1 - À vista Débito, recebe 10% de desconto; \n 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto; \n 3 - Em duas vezes, preço normal de etiqueta sem juros; \n 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;'
);
let desconto;
let valorFinal;

if (formaPagamento == 1) {
  desconto = precoProduto * 0.1;
  valorFinal = precoProduto - desconto;
} else if (formaPagamento == 2) {
  desconto = precoProduto * 0.15;
  valorFinal = precoProduto - desconto;
} else if (formaPagamento == 3) {
  valorFinal = precoProduto;
} else {
  desconto = precoProduto * 0.1;
  valorFinal = precoProduto + desconto;
}

console.log(
  'O valor final é R$',
  valorFinal,
  'com a forma de pagamento ',
  formaPagamento
);

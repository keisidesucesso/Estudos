/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}
function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}
function aplicarFormaPagamento(formaPagamento, precoProduto) {
  if (formaPagamento == 1) {
    return aplicarDesconto(precoProduto, 10);
  } else if (formaPagamento == 2) {
    return aplicarDesconto(precoProduto, 15);
  } else if (formaPagamento == 3) {
    return precoProduto;
  } else {
    return aplicarJuros(precoProduto, 10);
  }
}
const prompt = require('prompt-sync')({ sigint: true });

const precoProduto = parseFloat(prompt('digite o preço do produto: '));
const formaPagamento = parseInt(
  prompt(
    'Escolha uma forma de pagamento:\n 1 - À vista Débito, recebe 10% de desconto; \n 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto; \n 3 - Em duas vezes, preço normal de etiqueta sem juros; \n 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;'
  )
);

console.log(
  'O valor final é R$',
  aplicarFormaPagamento(formaPagamento, precoProduto),
  'com a forma de pagamento ',
  formaPagamento
);

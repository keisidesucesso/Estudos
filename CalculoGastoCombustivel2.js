const precoGasoline = 5.49;
const precoDiesel = 6.8;
const kmPorLitro = 13;
const prompt = require('prompt-sync')({ sigint: true });

let kmRodados = prompt('Digite a distância da viagem em km: ');

let tipoCombustivel = prompt(
  'Digite o tipo do combustível (1 para gasolina e 2 para Diesel): '
);

let totalGasto;
if (tipoCombustivel === '1') {
  totalGasto = (kmRodados / kmPorLitro) * precoGasoline;
} else {
  totalGasto = (kmRodados / kmPorLitro) * precoDiesel;
}

console.log('O valor gasto será de: R$', totalGasto.toFixed(2));

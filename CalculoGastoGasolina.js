const precoCombustivel = 5.49;
const kmPorLitro = 13;
const prompt = require('prompt-sync')({ sigint: true });
let kmRodados = prompt('Digite a distância da viagem em km: ');

let totalGasto = (kmRodados / kmPorLitro) * precoCombustivel;

console.log('O valor gasto será de: R$', totalGasto.toFixed(2));

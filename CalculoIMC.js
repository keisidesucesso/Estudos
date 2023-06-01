/*2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;*/

function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
  if (IMC < 18.5) {
    return 'Abaixo do peso: ';
  } else if (IMC >= 18.5 && IMC < 25) {
    return 'Peso normal: ';
  } else if (IMC >= 25 && IMC < 30) {
    return 'Acima do peso: ';
  } else if (IMC >= 30 && IMC < 40) {
    return 'Obeso: ';
  } else {
    return 'Obesidade grave: ';
  }
}

// Função imediatamente invocada: não nomeada que se executa imediatamente, só existe dentro dos parenteses
(function () {
  const prompt = require('prompt-sync')({ sigint: true });
  const altura = parseFloat(prompt('Digite a altura em metros: '));
  const peso = parseFloat(prompt('Digite o peso em Kg: '));
  let IMC = calcularIMC(peso, altura);

  console.log(classificarIMC(IMC), IMC.toFixed(2));
})();

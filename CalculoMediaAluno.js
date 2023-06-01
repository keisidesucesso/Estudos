/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const prompt = require('prompt-sync')({ sigint: true });

function calculaMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media;
}

function classificaNota(media) {
  if (media < 5) {
    return 'Aluno Reprovado com: ' + media;
  } else if (media > 7) {
    return 'Aluno Aprovado com: ' + media;
  } else {
    return 'Aluno em recuperação com: ' + media;
  }
}

(function () {
  const nota1 = parseInt(prompt('Digite a nota 1: '));
  const nota2 = parseInt(prompt('Digite a nota 2: '));
  const nota3 = parseInt(prompt('Digite a nota 3: '));
  console.log(classificaNota(calculaMedia(nota1, nota2, nota3)));
})();

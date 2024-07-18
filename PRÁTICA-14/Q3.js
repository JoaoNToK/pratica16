// 3. Escreva um código que imprima o nome do mês com base no número
// fornecido (1 para Janeiro, 2 para Fevereiro, etc.). Se o número não
// corresponder a nenhum mês, exiba "Mês inválido"

function obterNomeDoMes(numeroMes) {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
  
    if (numeroMes >= 1 && numeroMes <= 12) {
      return meses[numeroMes - 1];
    } else {
      return "Mês inválido";
    }
  }

  console.log(obterNomeDoMes(2))
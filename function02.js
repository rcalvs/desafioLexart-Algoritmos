// Crie um hashmap (ou um objeto simples em PHP) que contenha as funções elementares de adição, subtração, multiplicação e divisão.

const operations = {
  soma: function(param) {
    // A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
    if (Array.isArray(param) !== true) {
      return new Error('Invalid parameter')
    }

    return param.reduce((a, b) => a + b)
  },
  subtração: function(param) {
    // A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
    if (Array.isArray(param) !== true) {
      return new Error('Invalid parameter')
    }

    return param.reduce((a, b) => a - b)
  },
  multiplicação: function(param) {
    // A função de multiplicação permite um array como parâmetro de entrada e subtrai todos os seus elementos.
    if (Array.isArray(param) !== true) {
      return new Error('Invalid parameter')
    }

    return param.reduce((a, b) => a * b)
  },
  divisão: function(a, b) {
    // Leve em consideração que a divisão não deve permitir dividendo 0
    if (b === 0) {
      throw  new Error("Não divida por 0")
    } 
    return a / b
  }
}

const array = [1,2,3];
console.log(Array.isArray(array));
console.log(operations.soma(array));
console.log(operations.divisão(1,0));
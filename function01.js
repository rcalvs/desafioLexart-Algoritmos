// Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]

const array = [ 'a', 10, 'b', 'hola', 122, 15];

const arrayJustLetters = [];
const arrayJustNumbers = [];

const filterArray = (param) => {
  if (param !== array) {
    return Error('Invalid parameter')
  }
  // Obtenha uma array contendo apenas as letras
  param.filter((index) => {
    if (typeof index === 'string') {
      arrayJustLetters.push(index)
    }
  })
  
  // Obtenha uma array contendo apenas os números
  param.filter((index) => {
    if (typeof index === 'number') {
      arrayJustNumbers.push(index)
    }
  })
}

filterArray(array);
console.log(arrayJustLetters);
console.log(arrayJustNumbers);

  // Obtenha o maior número da array acima
  const arrayJustNumbers = [10, 122, 15];
  
  const arrayMax = (param) => {
    if (Array.isArray(param) === true) {
      return new Error('Invalid parameter')
    }

    return param.reduce((p1, p2) => {
      return ( p1 > p2 ? p1 : p2 );
    });    
  }
  
const maxNumber = arrayMax(arrayJustNumbers)
console.log(maxNumber);


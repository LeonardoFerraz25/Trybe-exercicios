const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

const teste = numbers.find(findDivisibleBy3And5)

console.log(teste); 

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((nome) => nome.length === 5);

console.log(findNameWithFiveLetters());
/* const soma = (num1, num2) => num1 + num2;
const div = (num1, num2) => num1 / num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;

const calcular = (num1, num2, callback) => {
  console.log(callback(num1, num2));
};

calcular(5, 3, mult); */



const resultadoFinal = (resultado) => console.log(resultado);

const funcSoma = (num1, num2, callback) => {
  const soma = num1 + num2;
  callback(soma);
}

funcSoma(10, 8, resultadoFinal);
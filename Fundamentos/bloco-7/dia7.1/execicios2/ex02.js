/* const calculaFatorial = (number) => {
  let fatorial = number; 
  for (let i = number-1; i > 0 ; i -= 1) {
    fatorial *= i; 
    
  }
  console.log(fatorial)
} */



const maiorPalavra = (frase) => {
  const arrFrase = frase.split(' ');
  let maior = 0;
  let palavraMaior ;
  arrFrase.forEach((palavra) => {
    if (maior < palavra.length){
      maior = palavra.length;
      palavraMaior = palavra;
    }
  });
  console.log(palavraMaior)
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');
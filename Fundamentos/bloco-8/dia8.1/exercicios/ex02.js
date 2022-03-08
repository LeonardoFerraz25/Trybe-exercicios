const sorteio = () => parseInt((Math.random() * 5) +1);

const jogo = (num ) => {
  return (num === sorteio()) ? "Parabéns você ganhou" : "Tente novamente" ;
}

console.log(jogo(2));
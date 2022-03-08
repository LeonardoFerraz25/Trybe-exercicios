const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretor = (gabarito, respostas) => {
  let pontos = 0 ;
  for (let i = 0; i < gabarito.length; i++) {
    if ( gabarito[i] === respostas[i] ) {
      pontos += 1 ;
    }else if (respostas[i] === 'N.A') {
      pontos = pontos;
    }else {
      pontos -= 0.5;
    }
  }
  return pontos;
}

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS) );
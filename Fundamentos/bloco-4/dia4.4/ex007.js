//função q recebe um numero natural interiro  retorna o somatorio de todos numeros n até 1
function soma(n){

    let res = n;

    for(let i = 1; i < n; i++){
    res += n - i;
  }
  return res;
}

console.log(soma(5));

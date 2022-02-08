//função que recebe numeros inteiros e retorna o indici do menor valor

let arr = [2, 4, 6, 7, 10, 0, -3];

function menorValor(arr){
    let menor = Math.min(...arr);

    return(arr.indexOf(menor));

}

console.log(menorValor(arr));
//função recebe um array de inteiros e retorna o indice de maior valor

let arr = [2, 3, 6, 7, 10, 1];

function maiorNumero(arr){
    let maior = Math.max(...arr);

    return(arr.indexOf(maior));
}

console.log(maiorNumero(arr));
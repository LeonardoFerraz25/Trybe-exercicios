//função que verifica se a palavra é um palindromo

function verificaPalindrome(param){
let nome1 = param;
let nome2 = "";
    for(let i = param.length-1; i >=0 ; i -=1){
        nome2 += param[i]
    }
    if(nome1 == nome2){
        return true;
    }
    return false;
}

console.log(verificaPalindrome('arara')) ;

console.log(verificaPalindrome('desenvolvimento')) ; 
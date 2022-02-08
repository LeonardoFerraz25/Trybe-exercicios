// função que recebe um array com nomes e retorna o nome com a maior quantidade de caracteres.

const nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function nomeMaior(){
    let maior = "";
    for(let i = 0; i < nomes.length; i +=1){
        if( nomes[i].length > maior.length)
            maior = nomes[i];
    }
    return maior;
}

console.log(nomeMaior(nomes));
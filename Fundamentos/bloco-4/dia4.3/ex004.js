let word = 'Antonella';
var nome = "";
//criar um loop que comece do fim da string e percorra ate o começo imprimindo a

for(let i = word.length-1; i >=0 ; i -=1){
    nome += word[i]
}
console.log(nome);
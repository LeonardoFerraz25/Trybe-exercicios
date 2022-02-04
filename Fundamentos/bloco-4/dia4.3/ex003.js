//delcara o numero a ser fatorado
let num = 10;
//criar uma variavel da soma
let fatorial = num;
//criar um loop para somar os numeros
for(let i = 1; i < num-1; i +=1){
    fatorial *= num - i ;
}
// retornar o fatorial do numero
console.log(fatorial);
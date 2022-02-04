//1- Adicionar o array;
let fruits = [3, 4, 10, 1, 12];
//2- Criar uma variável com valor 0;
let soma = 0;
//3- Criar um loop que percorre o array;
for(let i = 0; i < fruits.length; i +=1){
    //4- Incrementar a variável com o valor correspondente a cada loop;
    soma += fruits[i];
}
//5- Criar um if com a condição da variável ser maior que 15;
if( soma > 15){
    //6- Caso a variável obedeça a condição;
    //7- Imprimir a variável
    console.log(soma)
}else{
    //8- Caso não obedeça a condição;
    //9- Imprimir a mensagem "valor menor que 16";
    console.log("valor menor que 16")
}
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
 };
  let info2 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
};

// receber chave do info 

// receber chave do info2

//concatenar chave do info com chave do info2
let personagens = `${info.personagem} e ${info2.personagem}`;
let origem = `${info.origem} e ${info2.origem}`;
let nota = `${info.nota} e ${info2.nota}`;
let recorrente = ``;


if(info.recorrente == info2.recorrente){
    recorrente = "Ambos recorentes"
}else{
    recorrente = `${info.recorrente} e ${info2.recorrente}`;
}

console.log(personagens);
console.log(origem);
console.log(nota);
console.log(recorrente);
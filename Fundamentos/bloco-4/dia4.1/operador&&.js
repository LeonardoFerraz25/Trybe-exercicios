const currentHour = 23;
let menssage = "";

if(currentHour >= 22){
    menssage = "não deveriamos comer nada, é hora de dormir"
}else if(currentHour >= 18 && currentHour < 22){
    menssage = "rango da noite, vamos jantar :D"
}else if(currentHour >= 14 && currentHour < 18){
    menssage = "vamos fazer um bolo pro café da tarde"
}else if(currentHour >= 11 && currentHour < 14){
    menssage = "hora do almoço"
}else if(currentHour >= 4 &&  currentHour < 11){
    menssage = "Hmmmmmm, cheiro de café..."
}

console.log(menssage);
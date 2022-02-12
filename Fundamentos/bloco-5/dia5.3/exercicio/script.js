function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dias = document.querySelector('#days');

  function criarDias() {
      const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      
      for (let i = 0; i < dezDaysList.length; i++) {
          const item = document.createElement('li');
          item.innerText = dezDaysList[i];
          item.className = "day"
          if (dezDaysList[i] === 24 ||dezDaysList[i] === 31 ) {
            item.className = "day holiday";
          } 
          if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
            item.className = "day friday"
          }
          if(dezDaysList[i] === 25){
              item.className = "day friday holiday"
          }
          dias.appendChild(item);
        }
      
  }
  criarDias();

  const botoes = document.querySelector(".buttons-container");

  function criarBtn(text, id) {
      const btn = document.createElement("button");
      btn.innerHTML = text;
      btn.id = id;
      botoes.appendChild(btn);
  }
  criarBtn("Feriados", "btn-holiday");
  criarBtn("Sexta-Feria", "btn-friday");

  const feriados = document.querySelector("#btn-holiday");
 
  feriados.addEventListener('click', function (event) {
    const holiday = document.querySelectorAll('.holiday');

    for (let i = 0; i < holiday.length; i++) {
    
        if (holiday[i].classList.contains('bgblue')) {
            holiday[i].classList.remove('bgblue');
        }else{
            holiday[i].classList.add('bgblue')
        }
    }
  })

  const sexta = document.querySelector('#btn-friday');

  sexta.addEventListener('click', function (){
      const sextou = document.querySelectorAll('.friday');

      for (let i = 0; i < sextou.length; i++) {

          if (sextou[i].classList.contains('sextoou')){
              sextou[i].classList.remove('sextoou')
              sextou[0].innerHTML = 4; 
              sextou[1].innerHTML = 11;
              sextou[2].innerHTML = 18;
              sextou[3]. innerHTML = 25;
          }else{
              sextou[i].classList.add('sextoou');
              sextou[i].innerHTML = "SEXXXTOU !"
          }
      }
  })

const numeros = document.querySelectorAll('.day');
for (let i = 0; i < numeros.length; i++) {
    
    numeros[i].addEventListener('mouseenter', function (event){
        event.target.style.fontSize = "30px";
    })
    numeros[i].addEventListener('mouseout', function (event){
        event.target.style.fontSize = "16px";
    })
    
}



const tasks = document.querySelector(".my-tasks");

function addTasks(text) {
    const tarefa = document.createElement('span');
    tarefa.innerText = text;
    tasks.appendChild(tarefa);
    
}
addTasks("Importantes")


function addCor(cor) {
    const cores = document.createElement('div');
    cores.className = "task"
    cores.style.backgroundColor = cor ;
    tasks.appendChild(cores)
}

addCor("red");
addTasks("não tão importantes")
addCor("blue");

const select = document.querySelector('.task');
select.addEventListener('click', function() {
    
    if (select.classList.contains('selected')) {
        select.classList.remove('selected');
    }else{
        select.classList.add('selected');
    }
})

const select2 = tasks.lastElementChild;
select2.addEventListener('click', function (){

    if (select2.classList.contains('selected')) {
        select2.classList.remove('selected');
    }else{
        select2.classList.add('selected');
    }
})

for (let n = 0; n < numeros.length; n++) {
    
    numeros[n].addEventListener('click', function (event){

        if(select.classList.contains('selected')){
            event.target.style.color = "red"
            
        }else if(select2.classList.contains('selected')){
            event.target.style.color = "blue"
        }else{
            event.target.style.color = "rgb(119,119,119)"
        }
            
    })
}

const input = document.querySelector('#task-input');
const adicionar = document.querySelector('#btn-add');
const listaCompro = document.querySelector('.task-list')

adicionar.addEventListener('click', function (){
    const compromisso = document.createElement("li")
    const texto = input.value;
    compromisso.innerText = texto;
    listaCompro.appendChild(compromisso)
})
input.addEventListener('keyup', function (e){
    const key = e.which || e.keyCode;
    if (key == 13) {
    const compromisso = document.createElement("li")
    const texto = input.value;
    compromisso.innerText = texto;
    listaCompro.appendChild(compromisso)
    }
})
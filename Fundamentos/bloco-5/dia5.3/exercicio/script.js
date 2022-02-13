  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  const weekDaysList = document.querySelector('.week-days');

  weekDays.forEach((item) => {
    const dayListItem = document.createElement('li');
    dayListItem.innerText = item;
    weekDaysList.appendChild(dayListItem);
  } )
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const dias = document.querySelector('#days');
  
  dezDaysList.forEach((item) => {
    const diasDoMes = document.createElement('li');
    diasDoMes.innerText = item;
    diasDoMes.className = "day"
    if (item === 24 ||item === 31 ) {
      diasDoMes.className = "day holiday";
    } 
    if(item === 4 || item === 11 || item === 18){
      diasDoMes.className = "day friday"
    }
    if(item === 25){
        diasDoMes.className = "day friday holiday"
    }
    dias.appendChild(diasDoMes);
  
  })

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
  const holiday = document.querySelectorAll('.holiday');
  feriados.addEventListener('click', () => {
      holiday.forEach((item) => {
        if(item.classList.contains('bgblue')){
            item.classList.remove('bgblue');
        }else{
            item.classList.add('bgblue');
        }
      })
  })
  
  const sexta = document.querySelector('#btn-friday');
  const sextou = document.querySelectorAll('.friday');
  sexta.addEventListener('click', () => {
      sextou.forEach((item) => {
          if(item.classList.contains('sexxxtou')){
              item.classList.remove('sexxxtou')
              sextou[0].innerHTML = 4; 
              sextou[1].innerHTML = 11;
              sextou[2].innerHTML = 18;
              sextou[3].innerHTML = 25; 
          }else{
              item.classList.add('sexxxtou')
              item.innerText = "SEXXXTOU !"
          }
      })
  })

const numerosDoDias = document.querySelectorAll('.day');
numerosDoDias.forEach((item) => {
    item.addEventListener('mouseenter', (event) => {
        event.target.style.fontSize = '40px'
    })
    item.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = "20px";
    })
})

const tasks = document.querySelector(".my-tasks");

const addTasks = (text, cor) => {
    const tarefa = document.createElement('span');
    const cores = document.createElement('div');
    const quebra = document.createElement('br');
    tarefa.innerText = text;
    tarefa.className = "tarefaTexto"
    cores.className = "task"
    cores.style.backgroundColor = cor ;
    tasks.appendChild(tarefa);
    tasks.appendChild(cores)
    tasks.appendChild(quebra)

}

addTasks("Importantes", "red") 
addTasks("não tão importantes", "blue")
addTasks("não tão importantes", "blue")


const select = document.querySelectorAll('.task');
select.forEach((item) => {
    item.addEventListener('click', (event) => {
        const textoDaTarefa = event.target.previousSibling;
        if (event.target.classList.contains('selected')) {
            event.target.classList.remove('selected');
            textoDaTarefa.style.textDecoration = "none";
            
        }else{
            event.target.classList.add('selected');
            textoDaTarefa.style.textDecoration = "underline";
        }
    })
})

/*const select2 = tasks.lastElementChild;
select2.addEventListener('click', function (){

    if (select2.classList.contains('selected')) {
        select2.classList.remove('selected');
    }else{
        select2.classList.add('selected');
    }
})

/*for (let n = 0; n < numeros.length; n++) {
    
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
}) */
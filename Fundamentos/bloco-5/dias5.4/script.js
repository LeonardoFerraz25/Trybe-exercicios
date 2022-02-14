const corFundo = localStorage.getItem('backgroundColor');
const corLetra = localStorage.getItem('color');
const letraTm = localStorage.getItem('font-size');
document.body.style.backgroundColor = corFundo;
document.body.style.color = corLetra ;
document.body.style.fontSize = `${letraTm}px `;

const dark = document.querySelector('#dark');
dark.addEventListener('click', () => {
    document.body.style.backgroundColor = "#242424"
    document.body.style.color = "white"
    document.body.style.textShadow = "none"
    localStorage.setItem('backgroundColor', '#242424')
    localStorage.setItem('color', 'white')
})

const light = document.querySelector('#light');
light.addEventListener('click', () => {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.body.style.textShadow = "none"
    localStorage.setItem('backgroundColor', '#242424')
    localStorage.setItem('color', 'white')
})

const cyber = document.querySelector('#cyber');
cyber.addEventListener('click', () => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "green"
    document.body.style.textShadow = "1px 1px 5px grey "
    localStorage.setItem('backgroundColor', 'black')
    localStorage.setItem('color', 'green')
})

const size = document.querySelector('#size');
size.addEventListener('keyup', () => {
    const tamanho = size.value;
    if(tamanho < 16){
        document.body.style.fontSize = "16px";
    }else{
    document.body.style.fontSize = `${tamanho}px `;
    }
    localStorage.setItem('font-size', tamanho)
})
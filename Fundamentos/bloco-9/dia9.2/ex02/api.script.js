
const fetchCoins = async () => {
  const API_URL = 'https://api.coincap.io/v2/assets'
  
  const coins = await fetch(API_URL)
    .then(response => response.json())
    .then(data => data.data)
    .catch(erro => erro.toString());

  return coins;
}

const mostrar = async () => {
  const coins = await fetchCoins();
  const lista = document.querySelector('#moedas')
  coins.forEach((moeda, index) => {
    if (index <= 10) {
      const newli = document.createElement('li');
  
      const usdPrice = Number(moeda.priceUsd);
      let info = `${moeda.name} (${moeda.symbol}): <span>${usdPrice.toFixed(2)}</span>`;
      
      newli.innerHTML = info;
      lista.appendChild(newli);
    }
  })
}

mostrar();
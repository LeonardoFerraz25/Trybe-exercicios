
const fetchCoins = async () => {
  const API_URL = 'https://api.coincap.io/v2/assets'
  
  const coins = await fetch(API_URL)
    .then(response => response.json())
    .then(data => data.data)
    .catch(erro => erro.toString());

  return coins;
}

const fetchCotation = async () => {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`; 
 
  const usdCurrencies = await fetch(url)
    .then(response => response.json())
    .then(data => data.usd)
    .catch(erro => erro.toString());

  return usdCurrencies;
}

const mostrar = async () => {
  const coins = await fetchCoins();
  const currencies = await fetchCotation();

  const lista = document.querySelector('#moedas')
  coins.forEach((moeda, index) => {
    if (index <= 10) {
      const newli = document.createElement('li');
      const usdPrice = Number(moeda.priceUsd);
      const brlPrice = usdPrice * currencies.brl;

      let info = `${moeda.name} (${moeda.symbol}): <span>R$:${brlPrice.toFixed(2)}</span>`;
      
      newli.innerHTML = info;
      lista.appendChild(newli);
    }
  })
}

mostrar();
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const required = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, required)
    .then(response => response.json())
    .then(data => {
      const joke = document.querySelector('#jokeContainer');
      joke.innerHTML = data.joke;
    })
};
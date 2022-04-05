import './App.css';
import Pokemon from './components/Pokemon';
import Header from './components/Header';
import pokemons from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <section id='pokes'>
      {pokemons.map(iten => <Pokemon key={iten.id} poke={iten}/>)}
      
      </section>
    </div>
  );
}

export default App;

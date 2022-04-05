import './App.css';
import HelloWord from './classes/hello.js';
import About from './classes/component';
//import Card from './classes/card';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const ferramentas = [ 'react', 'redux', 'js', 'html'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HelloWord />
       <About />
       <ul>
        {ferramentas.map((item) => Task(item))}
       </ul>
       
      </header>
    </div>
  );
}

export default App;

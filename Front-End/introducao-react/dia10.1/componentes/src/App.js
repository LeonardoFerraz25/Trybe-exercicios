import './App.css';
import Content from './componentes/Content';
import Header from './componentes/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className='conteudo'>
          <Content />
        </section>
      </main>
    </div>
  );
}

export default App;

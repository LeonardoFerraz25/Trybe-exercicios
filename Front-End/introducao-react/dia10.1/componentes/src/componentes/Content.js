import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const lista = ((iten) => {
  const materias =  <>
      <h2 className="materia" >O conteúdo é: {iten.conteudo}</h2>
      <div className="info">
        <p>Status: {iten.bloco}</p>
        <p>Bloco: {iten.status}</p>
      </div>
      </>

  return materias
})

class Content extends React.Component {
  render() {
    return (
      <section>
    {conteudos.map((iten) => <div className="aulas" >{lista(iten)}</div>)}
      </section>
    )
  }
}

export default Content;
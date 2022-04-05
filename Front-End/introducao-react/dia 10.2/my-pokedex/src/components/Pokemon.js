import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, image} = this.props.poke;
    const {measurementUnit, value} = this.props.poke.averageWeight;
    return (
      <div  className="pokemon-card">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{value} {measurementUnit}</p>
        <img src={image} alt="foto pokemom" />
      </div>
    )
  }
}

export default Pokemon;
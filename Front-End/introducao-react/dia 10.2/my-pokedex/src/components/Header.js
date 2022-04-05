import React from "react";


class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="vermelho"></div>
        <div className="preta"></div>
        <h1 className="title"> Pokedex</h1>
        <div className="branca"></div>
      </header>
    )
  }
}

export default Header;
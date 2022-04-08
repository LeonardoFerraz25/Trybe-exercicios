import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      textarea: '',
      userName: '',
      userEmail: '',
      pecado: '',
      assitido: false
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div className="Formulario">
        <h1>formulario de teste</h1>
        <form >
          <select onChange={this.handleChange} name="pecado" id="pecado">
            <option value="meliodas">Meliodas</option>
            <option value="bam">Bam</option>
            <option value="king">King</option>
            <option value="diane">Diane</option>
            <option value="king">King</option>
            <option value="gowter">Gowter</option>
            <option value="escanor">Escanor</option>
          </select>
          <label htmlFor="nome">Nome:
          <input 
            name="userName" 
            id="nome" t
            ype="text" 
            onChange={this.handleChange}
          />
          </label>
          <label htmlFor="email">Email:
          <input
            onChange={this.handleChange}
            name="userEmail" 
            id="email" 
            type="text" 
          />
          </label>
          <label htmlFor="assitido"> já assistiu:
            <input onChange={this.handleChange} type="checkbox" name="assitido" id="assitido" />
          </label>
          <textarea 
            onChange={this.handleChange} 
            name="textarea" 
            id="sobre" 
            cols="30" rows="10" 
          ></textarea>
        </form>
      </div>
    )
    
  }
}

export default Form;
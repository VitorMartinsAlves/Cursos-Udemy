import React, { Component } from 'react';
import Componente from './pages/componente';
//importamos o componente
import '../src/asset/style.css'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Vitor",
      email: "vitormartins@gmail.com"
    }
    this.ChangeState = this.ChangeState.bind(this)
    this.ResetState = this.ResetState.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  componentWillMount() {
    console.log("Carregando")
  }

  componentDidMount() {
    console.log("Carregado")
  }

  ChangeState() {
    console.log("Mudando para estado 1")
    this.setState({
      name: "Vitor Martins",
      email: "vitormartins@orkut.com"
    })
  }

  ResetState() {
    console.log("Mudando para estado 2")
    this.setState({
      name: "Larissa",
      email: "larissa@yahoo.com"
    })
  }

changeInput(event){
  let target = event.target
  let index = target.name
  this.setState({
    [index]: target.value
  })
}

  atualizaNome(input){
    this.setState({ name : input.target.value })
}

  render() {
    return (
      <div className="App-header">
        <p> HOME <Componente nome="componente"></Componente></p>
        {/* Chamamos o componente e definimos a props */}

        <div className="Flex">
          <form>
            <label>Nome:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.changeInput}
              ></input>
            </label>
            <label>Nome:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.changeInput}
              ></input>
            </label>
          </form>
          <span>Nome: {this.state.name}</span>
          <span>Email: {this.state.email}</span>
        </div>
        <div>
          <button onClick={this.ChangeState}>Mudar Estado</button>
          <button onClick={this.ResetState}>Reseta Estado</button>
        </div>

      </div>
    );
  }
}

export default App;

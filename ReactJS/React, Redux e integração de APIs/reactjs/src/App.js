import React, { Component } from 'react';
import Componente from './pages/componente';
//importamos o componente



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Vitor",
      email: "vitormartins@gmail.com"
    }
    this.ChangeState = this.ChangeState.bind(this)
    this.ResetState = this.ResetState.bind(this)
  }

  componentWillMount() {
    console.log("Carregando")
  }

  componentDidMount() {
    console.log("Carregado")
  }

  ChangeState() {
    this.setState({
      name: "Vitor Martins"
    })
  }

  ResetState() {
    this.setState({
      name: "Vitor"
    })
  }

  render() {
    return (
      <div className="App-header">
        <p> home <Componente nome="componente"></Componente></p>
        {/* Chamamos o componente e definimos a props */}

        <div>
          {this.state.name}
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

import React, { Component } from 'react';
//importamos o "Componet" da biblioteca do react


class Componente extends Component {
  render (){
      return(
        <div className="App">este é um componente {this.props.nome}</div>
      );
  }
}

export default Componente;

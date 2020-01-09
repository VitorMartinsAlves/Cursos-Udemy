import React from 'react';
import Componente from './pages/componente';
//importamos o componente


function App() {
  return (
    <div className="App">
      <p>home <Componente nome="componente"></Componente></p>
      {/* Chamamos o componente e definimos a props */}
    </div>
  );
}

export default App;

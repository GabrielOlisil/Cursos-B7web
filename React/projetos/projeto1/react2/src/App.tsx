import React from 'react';

//components
import * as Sty from "./AppStyles"

//css
import './App.css';

function App() {
  return (
    <div className="App">
      Olá, mundo
      <Sty.Header bgColor="#1a1a1a">
        <span className='red'>OOOOO SPAN</span>

        <Sty.Button bg='tomato' small>
          chama muito
        </Sty.Button>

        <Sty.Button small bg='#caf'>
          chama pouco
        </Sty.Button>
      </Sty.Header>
    </div>
  );
}

export default App;

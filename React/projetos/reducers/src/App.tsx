import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [state, dispatch] = useReducer(reducer);
  return (
    <div className="App">
    </div>
  )
}

export default App

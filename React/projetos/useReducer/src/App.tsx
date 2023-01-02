import './App.css';
import { useContagem } from './hooks/contagem';



function App() {
  
  const [contagem, contagemDispatch] = useContagem();
  
  return (
    <div className="App">
      Contagem: {contagem.count} <hr/>
      <button onClick={() => contagemDispatch({type: 'add'})} >Adicionar</button>
      <button onClick={() => contagemDispatch({type: 'del'})} >Remover</button>
      <button onClick={() => contagemDispatch({type: 'reset'})} >resetar</button>

    </div>
  )
}

export default App

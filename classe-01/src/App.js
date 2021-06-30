import './App.css';
import Prato from './components/Prato'
import {useState} from 'react'

function App() {
  const [quantidade, setQuantidade] = useState();
  const cardapio = [
  {
    nome: "Moqueca",
    preco: 73.25
  }, 
  {
    nome: "Dobradinha",
    preco: 25
  },
  {
    nome: "Feijoada",
    preco: 20
  }]

  return (
    <div className="App">
      <h1>Cardápio</h1>
      <ul>
        <Prato/>
      </ul>
    </div>
  );
}

export default App;

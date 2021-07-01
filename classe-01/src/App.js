import "./App.css";
import Prato from "./components/Prato";
import { useState } from "react";

const cardapio = [
  {
    nome: "Moqueca",
    preco: 73.25,
  },
  {
    nome: "Dobradinha",
    preco: 25,
  },
  {
    nome: "Feijoada",
    preco: 20,
  },
];

function App() {
  const [quantidade, setQuantidade] = useState({});
  cardapio.sort(
    (p1, p2) => (quantidade[p2.nome] || 0) - (quantidade[p1.nome] || 0)
  );
  //esse "ou" significa que se a variavel for nula, vai com 0
  //é como um qtds[p2.nome] !== undefined ? qtds[p2.nome] : 0

  return (
    <div className="App">
      <h1>Cardápio</h1>
      <ul>
        {cardapio.map((prato) => {
          return (
            <li key={prato.nome}>
              <Prato nome={prato.nome} preco={prato.preco} quantidade={quantidade[prato.nome] || 0} setQuantidade={
                qtd => setQuantidade(quantidade => ({...quantidade, [prato.nome] : qtd}))}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

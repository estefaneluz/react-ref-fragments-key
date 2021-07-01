import "./App.css";
import {useState} from 'react'

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="app">
      <h1>Login</h1>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <label>
          Usuário
          <input
            value={usuario}
            onChange={(ev) => setUsuario(ev.target.value)}
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            value={senha}
            onChange={(ev) => setSenha(ev.target.value)}
          />
        </label>
        <button>Fazer login</button>
      </form>
    </div>
  );
}

export default App;

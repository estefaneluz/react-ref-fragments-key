import "./App.css";
import {useState, useRef} from 'react'

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const inputUser = useRef();
  const inputPass = useRef();

  return (
    <div className="app">
      <h1>Login</h1>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          if(!inputUser.current.value){
            inputUser.current.focus();
          } else if(!inputPass.current.value){
            inputPass.current.focus();
          } else {
            alert("Você fez login com sucesso!");
          }
        }}
      >
        <label>
          Usuário
          <input
            value={usuario}
            ref={inputUser}
            onChange={(ev) => setUsuario(ev.target.value)}
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            value={senha}
            ref={inputPass}
            onChange={(ev) => setSenha(ev.target.value)}
          />
        </label>
        <button>Fazer login</button>
      </form>
    </div>
  );
}

export default App;

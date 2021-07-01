import "./App.css";
import {useState, useRef, useEffect} from 'react'

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const inputUser = useRef();
  const inputPass = useRef();

  useEffect(()=>{
    if(!inputUser.current.value && !inputPass.current.value){
      inputUser.current.focus();
    } else if(!inputUser.current.value){
      inputUser.current.focus();
    } else if(!inputPass.current.value){
      inputPass.current.focus();
    }

  }, [usuario, senha])
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

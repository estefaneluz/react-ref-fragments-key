import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [delaySegundos, setDelaySegundos] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCount((c) => c + step),
      delaySegundos * 1000
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <label>
        Passo:
        <br />
        <input
          type="number"
          value={step}
          onChange={(ev) => setStep(ev.target.valueAsNumber)}
          min={0}
        />
      </label>
      <label>
        Delay:
        <br />
        <input
          type="number"
          value={delaySegundos}
          onChange={(ev) => setDelaySegundos(ev.target.valueAsNumber)}
          min={1}
        />
      </label>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import './App.css';
import Busca from "./Busca"
import Endereco from "./Endereco"

function App() {
  const [end, setEnd] = useState("");

  console.log(end)

  return (
    <div className="App">
      <Busca setEnd={setEnd} />
      {end && <Endereco end={end} />}

    </div>
  );
}

export default App;

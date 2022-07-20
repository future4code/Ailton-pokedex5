import React, { useState } from "react";
import { Router } from "./routes/Router";
import { DivApp } from "./styleGeral";
import Context from "./createContext/createContext";
import { getPokemon } from "./services/requests";

function App() {
  const [pokeId, setPokeId] = useState([]);
  const Provider = Context.Provider;
  const values = {
    pokeId,
    setPokeId,
    getPokemon
  };

  return (
    <DivApp>
      <Provider value={values}>
        <Router />
      </Provider>
    </DivApp>
  );
}

export default App;

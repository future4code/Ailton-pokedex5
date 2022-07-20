import React from "react";
import { Router } from "./routes/Router";
import { DivApp } from "./styleGeral";
import GlobalState from "./Components/Global/GlobalState";


function App() {

 
  return (
    <DivApp>
      <GlobalState>
        <Router />
      </GlobalState>
    </DivApp>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Xumm } from "xumm";

const xumm = new Xumm("api-key");
const ottToken = xumm.xapp?.getEnvironment().ott || ''

const xummOtt = new Xumm(ottToken)
xummOtt.environment.ott?.then((ott) => {
  alert(ott?.origin?.type)
})

function App() {
  if (xumm.runtime.xapp) {
    xummOtt.environment.ott?.then((ott) => {
      if (ott?.origin?.type === 'QR')
        alert(ott.origin.data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="Close-button" onClick={() => xumm.xapp?.close()}>
          Close xApp
        </button>
      </header>
    </div>
  );
}

export default App;

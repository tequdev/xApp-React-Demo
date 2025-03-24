import React from "react";
import { useState } from "react";
import "./App.css";
import { Xumm } from "xumm";

const xumm = new Xumm("api-key");

function App() {
  const [account, setAccount] = useState(null);
  xumm.user.account.then((a) => setAccount(a));
  const createTransaction = async () => {
    const payload = await xumm.payload?.create({
      TransactionType: "Payment",
      Destination: "rQQQrUdN1cLdNmxH4dHfKgmX5P4kf3ZrM",
      Amount: "1000000",
    });
    xumm.xapp?.openSignRequest({
      uuid: payload!.uuid,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        Address: {account}
        <button className="Payment-button" onClick={createTransaction}>
          Create Payment Transaction
        </button>
        <button className="Close-button" onClick={() => xumm.xapp?.close()}>
          Close xApp
        </button>
      </header>
    </div>
  );
}

export default App;

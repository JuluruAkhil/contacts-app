import React, { useState } from "react";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [details, setDetails] = useState(null);

  return (
    <div className="App">
      <GlobalStyle />
      {details === null ? (
        <Home details={details} setDetails={setDetails} />
      ) : (
        <Contacts details={details} setDetails={setDetails} />
      )}
      {/* <Home details={details} setDetails={setDetails} />
      <Contacts details={details} setDetails={setDetails} /> */}
    </div>
  );
}

export default App;

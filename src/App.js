import React, { useState } from "react";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [details, setDetails] = useState(null);
  const [personal, setPersonal] = useState({ photo: "", name: "", email: "" });

  return (
    <div className="App">
      <GlobalStyle />
      {details === null ? (
        <Home
          details={details}
          setDetails={setDetails}
          personal={personal}
          setPersonal={setPersonal}
        />
      ) : (
        <Contacts
          details={details}
          setDetails={setDetails}
          personal={personal}
          setPersonal={setPersonal}
        />
      )}
    </div>
  );
}

export default App;

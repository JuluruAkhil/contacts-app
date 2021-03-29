import React, { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import GlobalStyle from './GlobalStyle';

function App() {
  const [details, setDetails] = useState(null);
  const [personal, setPersonal] = useState({ photo: '', name: '', email: '' });

  useEffect(() => {
    if (localStorage.getItem('details') !== null) {
      setDetails(JSON.parse(localStorage.getItem('details')));
    }
    if (localStorage.getItem('personal') !== null) {
      setPersonal(JSON.parse(localStorage.getItem('personal')));
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyle />

      {details === null || details === undefined ? (
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

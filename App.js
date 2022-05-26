import React, {useEffect , useState} from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hola vecinirijillo</h1>
      <h2>Que nivel, papá</h2>

      <Row title="Últimos Estrenos" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;


/*function setUsuario()
{
  
  return();
}*/
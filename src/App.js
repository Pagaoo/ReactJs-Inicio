import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Api from './components/Api.js';

function App() {

  const [nomes, setNomes] = useState([{}]);

  async function initApi(){
    let pegaNomes = await Api.getPersons();
    setNomes(pegaNomes);
  }

  useEffect(() => {
    initApi();
  }, []);

  return (
    <div className="App">
      
      <Header />
      <Body />

    {
      nomes.map(function(data){
        return(
          <div>
            <h2>{data.name} | {data.email}</h2>
          </div>
        )
      })
    }

    </div>
  );
}

export default App;

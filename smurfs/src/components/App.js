import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./App.css";

//components 
import SmurfForm from './smurfForm';
import SmurfCard from './smurfCard';

//context 
import { SmurfContext } from './context/smurfContext'


function App() {

  const [newSmurf, setNewSmurf] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
        setNewSmurf(res.data)
    })
    .catch((err) => {console.log("error in smurf axios")})

  }, [])




    return (
      <div className="App">
      <SmurfContext.Provider value={{newSmurf}}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm/>
        <SmurfCard/>
        </SmurfContext.Provider>
      </div>
    );
  }



export default App;

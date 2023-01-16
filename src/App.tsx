import React from 'react';
import logo from './logo.svg';
import Game from './components/game';
import './components/guess.css'
import { useState,useEffect } from 'react';
import Load from './components/load';

function App() {
  const[loa,setLoa]=useState<boolean>(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoa(false)
    },6000)
      },[])
  return ( <div>
 { loa===true? <Load/>
 :
    <div className="App">
     <Game/>
    </div>
}
    </div>
  );
}

export default App;

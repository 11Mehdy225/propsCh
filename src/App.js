import React from "react";
import PlayersList from "./composants/PlayersList";
import './App.css'
// import trophe from './trophe.png'

const App = () => {
  return (
    <div>
      <h1>Les Nominés au prix The Best UEFA</h1>
      <img src='/trophe.png' alt="tro" className="trophe"/>
      <PlayersList/>
    </div>
  );
};

export default App;

import React from "react";
import Game from './Components/NumberGame';
import NavBar from './Components/NavBar';
import './App.css'


const App = () => {
  return (
    <div>
      <NavBar/>
    <div className="App">
      <h1>Welcome To Home Page</h1>
      <Game />
    </div>
    </div>
  );
};

export default App;

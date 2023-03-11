import './App.css';
import {Comp1} from './Components/component1'
import { Comp2 } from './Components/component2';
import { Comp3 } from './Components/component3';
import { useState } from 'react';
function App() {


  return (
    <div className="App">
        <Comp1/>
        <Comp2/>
        <Comp3/>
    </div>
  );
}

export default App;

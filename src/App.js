import './App.css';
import { useState } from "react";

function App() {
  const greeting = ['Namstey', 'Prnaam', 'How are you', 'Good Morning', 'Namskaar Mandali']
  const [index, setIndex] = useState(0)

  function handleGreet() {
    let a = greeting.length
    setIndex((index+1)%a)
  }
  return (
    <div className="App">
      <h1>{greeting[index]}</h1>
      <button onClick={handleGreet}>Greet</button>
    </div>
  );
}

export default App;

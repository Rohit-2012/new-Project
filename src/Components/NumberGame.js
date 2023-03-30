import React, { useState } from "react";


const Game = () => {
  const [luckyNumber, setLuckyNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const numberGuess = Number(guess);
    if (numberGuess === luckyNumber) {
      setMessage(
        `Congratulations! You guessed the right number in ${count} attempts.`
      );
      setLuckyNumber(Math.floor(Math.random() * 100) + 1);
      setGuess("");
      setCount(0);
    } else if (numberGuess < luckyNumber) {
      setMessage(`You guessed a smaller number.`);
      setGuess("");
      setCount(count + 1);
    } else {
      setMessage(`You guessed a bigger number.`);
      setGuess("");
      setCount(count + 1);
    }
  };

  return (
    <div >
      <div>
        <h2>Guess the Lucky Number!</h2>
        <p>Guess a number between 1 and 100:</p>
        <form onSubmit={handleGuessSubmit}>
          <input type="number" placeholder="Guess lucky number..." value={guess} onChange={handleGuessChange} />
          <button type="submit">Match Number</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Game;

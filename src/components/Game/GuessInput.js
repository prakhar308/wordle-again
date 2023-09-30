import React from 'react';

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        console.info({ guess });
        addGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={disabled}
        onChange={event => {
          if (event.target.value.length > 5) return;
          setGuess(event.target.value.toUpperCase());
        }}
        pattern="^.{5,5}$"
      />
    </form>
  )
}

export default GuessInput;
import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState('inProgress'); 

  function addGuess(newGuess) {
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);

    if (newGuess === answer) {
      setGameStatus('won');
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}/>
      <GuessInput
        addGuess={addGuess}
        disabled={gameStatus === 'won' || gameStatus === 'lost'}
      />
      {gameStatus === 'won' &&
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {' '}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      }
      {gameStatus === 'lost' && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
    </>
  );
}

export default Game;

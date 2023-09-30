import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import PreviousGuesses from './PreviousGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [previousGuesses, setPreviousGuesses] = React.useState(range(0,NUM_OF_GUESSES_ALLOWED).map(val => ""));
  const guessesMade = previousGuesses.filter(g => g).length;

  let gameStatus;
  if (previousGuesses[guessesMade-1] === answer) {
    gameStatus = 'won';
  } else if(guessesMade === NUM_OF_GUESSES_ALLOWED) {
    gameStatus = 'lost';
  } else {
    gameStatus = 'inProgress';
  }

  function addGuess(newGuess) {
    let guessAdded = false;
    const guesses = previousGuesses.map(prevGuess => {
      if (!prevGuess && !guessAdded) {
        guessAdded = true;
        return newGuess;
      }
      return prevGuess;
    });
    setPreviousGuesses(guesses);
  }

  return (
    <>
      {gameStatus === 'won' &&
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {' '}
            <strong>{guessesMade} guesses</strong>.
          </p>
        </div>
      }
      {gameStatus === 'lost' && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
      <PreviousGuesses previousGuesses={previousGuesses} answer={answer}/>
      <GuessInput
        addGuess={addGuess}
        disabled={gameStatus === 'won' || gameStatus === 'lost'}
      />
    </>
  );
}

export default Game;

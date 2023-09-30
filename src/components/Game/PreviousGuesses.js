import React from 'react';

import Guess from './Guess';

function PreviousGuesses({ previousGuesses, answer }) {
	return (
		<div className="guess-results">
			{previousGuesses.map(prevGuess => (
				<Guess
					key={Math.random()}
					guess={prevGuess}
					answer={answer}
				/>
			))}
		</div>
	);
}

export default PreviousGuesses;
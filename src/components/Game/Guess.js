import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
	if (!guess) {
		return (
			<p className="guess">
				{range(0, 5).map(val => (
					<span key={val} className={'cell'}></span>
				))}
			</p>
		);
	}

	const status = checkGuess(guess, answer);
	return (
		<p className="guess">
			{range(0, 5).map(val => (
				<span key={val} className={'cell' + ' ' + status[val]['status']}>
					{guess[val]}
				</span>
			))}
		</p>
	);
}

export default Guess;
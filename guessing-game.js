function guessingGame() {
	const SECRET_NUM = Math.floor(Math.random() * 100);
	let gameOver = false;
	let guesses = 0;

	return function guess(num) {
		if (gameOver) return 'You already won! Start a new game to keep playing!';
		guesses++;
		if (num === SECRET_NUM) {
			gameOver = true;
			return `You got it! It took you ${guesses} tries to find ${SECRET_NUM}`;
		}
		if (num < SECRET_NUM) return `${num} is too low, try again!`;
		if (num > SECRET_NUM) return `${num} is too high, try again!`;
	};
}

module.exports = { guessingGame };

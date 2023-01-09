function createAccount(pin, amount = 0) {
	return {
		checkBalance(inputPin) {
			if (inputPin !== pin) return 'Invalid PIN, please try again';
			return `$${amount}`;
		},
		deposit(inputPin, depositAmount) {
			if (inputPin !== pin) return 'Invalid PIN, please try again';
			amount += depositAmount;
			return `Deposited $${depositAmount}. Balance: $${amount}.`;
		},
		withdraw(inputPin, withdrawAmount) {
			if (inputPin !== pin) return 'Invalid PIN, please try again';
			if (withdrawAmount > amount) return 'Insufficient funds for withdraw. Transaction cancelled.';
			amount -= withdrawAmount;
			return `Withdraw of $${withdrawAmount} successful. Balance: ${amount}`;
		},
		changePin(oldPin, newPin) {
			if (oldPin !== pin) return 'Invalid PIN';
			pin = newPin;
			return 'PIN succesfully changed';
		}
	};
}

module.exports = { createAccount };

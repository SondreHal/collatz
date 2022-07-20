const userInput = document.getElementById("userInput");

const initialNumber = document.querySelector(".initialNumber");
const highestNumber = document.querySelector(".stepsTaken");
const stepsTaken = document.querySelector(".highestNumber");
const steps = document.getElementById("steps");

function userSubmit() {
	let collatz = (num) => {
		// loop till the given num is not 1
		while (num != 1) {
			//print the num
			amount.push(num);

			//if the number is even
			if (num % 2 == 0) {
				num = parseInt(num / 2);
			} else {
				//if the number is odd
				num = num * 3 + 1;
			}
		}

		// print the last number
	};

	let amount = [];

	collatz(userInput.value);

	amount.push(1);
	steps.textContent = amount;

	amount.sort(function (a, b) {
		return b - a;
	});

	initialNumber.textContent = `Utfører Collatz funksjonen på tallet ${userInput.value}`;
	console.log(amount);

	highestNumber.textContent = `Antall steg før tallet endte på 1: ${amount.length - 1}`;

	if (userInput.value != 1) {
		stepsTaken.textContent = `Høyeste tall nådd i sekvensen: ${amount[0]}`;
	} else {
		stepsTaken.textContent = `Høyeste tall nådd i sekvensen: ${1}`;
	}
}

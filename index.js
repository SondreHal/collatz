const userInput = document.getElementById("userInput");

const initialNumber = document.querySelector(".initialNumber");
const highestNumber = document.querySelector(".stepsTaken");
const stepsTaken = document.querySelector(".highestNumber");
const steps = document.getElementById("steps");

function userSubmit() {
	let collatz = (num) => {
		// loop till the given num is not 1
		while (num != 1) {
			//push number to array
			amount.push(num);

			//if the number is even
			if (num % 2 == 0) {
				num = parseInt(num / 2);
			} else {
				//if the number is odd
				num = num * 3 + 1;
			}
		}
	};

	let amount = [];

	//run Collatz code on user input number
	collatz(userInput.value);

	//pushes 1 into array since collatz code does not, in case user want to input 1
	amount.push(1);

	//displays steps in textarea
	steps.textContent = amount;

	//sorts array highest number to lowest
	amount.sort(function (a, b) {
		return b - a;
	});

	//Shows number being collatz'd
	initialNumber.innerHTML = `Utfører Collatz funksjonen på tallet <span class="orange">${userInput.value}</span>`;

	//Shows amount of steps taken to get to 1
	highestNumber.innerHTML = `Antall steg før tallet endte på 1: <span class="yellow"> ${
		amount.length - 1
	}</span>`;

	//Shows biggest number in steps to get to 1
	if (userInput.value != 1) {
		stepsTaken.innerHTML = `Høyeste tall nådd i sekvensen: <span class="green"> ${amount[0]}</span>`;
	} else {
		stepsTaken.innerHTML = `Høyeste tall nådd i sekvensen: <span class="green"> ${1}</span>`;
	}
}

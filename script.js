let humanScore = 0;
let computerScore = 0;
// console.log("Hello World");
function getComputerChoice() {
	let random = Math.random()
	if (random < 0.33) {
		return "rock";
	}
	if (random < 0.66) {
		return "paper";
	}
	return "scissors";
	
}

function getHumanChoice() {
	let choice = prompt("rock paper scissors");
	return choice;
}

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	if (humanChoice != computerChoice) {
		if (humanChoice == "rock" && computerChoice == "scissors") {
			humanScore += 1;
		} else if (humanChoice == "paper" && computerChoice == "rock") {
			humanScore += 1;
		} else if (humanChoice == "scissors" && computerChoice == "paper") {
			humanScore += 1;
		} else {
			computerScore += 1;
		}
	}
	console.log(humanScore);
	console.log(computerScore);
}

for (let index = 0; index < 5; index++) {
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);
}
if (humanScore > computerScore) {
	console.log("Winner is human");
} else if (humanScore < computerScore) {
	console.log("Winner is computer");
} else {
	console.log("Draw");
}

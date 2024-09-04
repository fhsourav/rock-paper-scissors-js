const body = document.querySelector("body");

const button_r = document.createElement("button");
button_r.classList.add("btn");
button_r.id = "rock";
button_r.textContent = "rock";

const button_p = document.createElement("button");
button_p.classList.add("btn");
button_p.id = "paper";
button_p.textContent = "paper";

const button_s = document.createElement("button");
button_s.classList.add("btn");
button_s.id = "scissors";
button_s.textContent = "scissors";

const div = document.createElement("div");
div.classList.add("result");

body.appendChild(button_r);
body.appendChild(button_p);
body.appendChild(button_s);
body.appendChild(div);

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const h2 = document.createElement("h2");

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(h2);

const buttons = document.querySelectorAll(".btn");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

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

function playRound(humanChoice, computerChoice) {

	if (gameOver) {
		return;
	}
	
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
	p1.textContent = "Human choice: " + humanChoice + " | Computer choice: " + computerChoice;
	p2.textContent = "Result: Human " + humanScore + " - " + computerScore + " Computer";
	
	if (humanScore == 5) {
		gameOver = true;
		h2.textContent = "Winner is human";
	} else if (computerScore == 5) {
		gameOver = true;
		h2.textContent = "Winner is computer";
	}
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		let computerSelection = getComputerChoice();
		let humanSelection = button.id;
		playRound(humanSelection, computerSelection);
	})
});

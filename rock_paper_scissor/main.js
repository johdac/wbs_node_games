const options = ["rock", "paper", "scissor"];

// Check basic user input
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Wrong input. Use game like so: 'node main.js rock'");
  process.exit(1);
}

// Users choice
const usersInput = args[0];
if (!options.includes(usersInput)) {
  console.error("Wrong choice. Available options are 'rock', 'paper' and 'scissor'");
  process.exit(1);
}
const usersChoice = usersInput;

// Computers choice
const computersInput = Math.floor(Math.random() * options.length);
const computersChoice = options[computersInput];

// Who won
let winningStatus;
if (usersChoice === computersChoice) winningStatus = "draw";
else if (usersChoice === "rock" && computersChoice === "scissor") winningStatus = "won";
else if (usersChoice === "paper" && computersChoice === "rock") winningStatus = "won";
else if (usersChoice === "scissor" && computersChoice === "paper") winningStatus = "won";
else winningStatus = "lost";

console.log(`\nYou chose: \t\t${usersChoice} \nComputer chose: \t${computersChoice} \nYou ${winningStatus}!`);

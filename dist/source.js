const r = "🪨";
const p = "📜";
const s = "✂️";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");
const container = document.querySelector("#game-container");

let playerChoiceDisplay = document.querySelector("#player-choice");
let compChoiceDisplay = document.querySelector("#comp-choice");
let winnerInfo = document.querySelector("#winner-info");
let roundDisplay = document.querySelector("#round-display");
let userPoints = document.querySelector("#user-points");
let computerPoints = document.querySelector("#computer-points");
let buttons = document.querySelector("#buttons");

let round = 0;
let userScore = 0;
let compScore = 0;
userPoints.textContent = "User: 0";
computerPoints.textContent = "Computer: 0";

// Buttons for user move selection
rockBtn.addEventListener("click", () => {
  playerChoiceDisplay.textContent = r;
  let userChoice = r;
  processRound(userChoice);
});

paperBtn.addEventListener("click", () => {
  playerChoiceDisplay.textContent = p;
  let userChoice = p;
  processRound(userChoice);
});

scissorsBtn.addEventListener("click", () => {
  playerChoiceDisplay.textContent = s;
  let userChoice = s;
  processRound(userChoice);
});

resetBtn.addEventListener("click", () => {
  location.reload();
});

// Main business logic
function processRound(userChoice) {
  let computerChoice = getComputerChoice();
  compChoiceDisplay.textContent = computerChoice;
  let result = playRound(userChoice, computerChoice);
  winnerInfo.textContent = result;
  if (result === "User wins! 😀") {
    userScore++;
  } else if (result === "Computer wins! 😬") {
    compScore++;
  }
  round++;
  roundDisplay.textContent = `Round: ${round}`;
  userPoints.textContent = `User: ${userScore}`;
  computerPoints.textContent = `Computer: ${compScore}`;

  if (round === 5) {
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
    let victorStatement = document.createElement("div");
    victorStatement.textContent = determineWinner(userScore, compScore);
    victorStatement.classList.add("final-victor");
    container.insertBefore(victorStatement, buttons);
  }
}

function getComputerChoice() {
  // Randomized computer choice
  let num = Math.floor(Math.random() * 3);
  let compChoice;
  if (num === 0) {
    compChoice = r;
  } else if (num === 1) {
    compChoice = p;
  } else {
    compChoice = s;
  }
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  // Logic for determining the winner of a single round of play
  let victory = "User wins! 😀";
  if (playerSelection === computerSelection) {
    return "It's a tie! 👔";
  } else if (playerSelection === r && computerSelection === s) {
    return victory;
  } else if (playerSelection === p && computerSelection === r) {
    return victory;
  } else if (playerSelection === s && computerSelection === p) {
    return victory;
  } else {
    return "Computer wins! 😬";
  }
}

function determineWinner(userPoints, compPoints) {
  if (userPoints > compPoints) {
    return "Game over! User is the victor! 😺";
  } else if (compPoints > userPoints) {
    return "Game over! Computer is the victor! ☠️";
  } else {
    return "Game over! It's a draw 💤";
  }
}

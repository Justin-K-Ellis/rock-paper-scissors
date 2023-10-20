const r = "Rock";
const p = "Paper";
const s = "Scissors";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const container = document.querySelector("#container");

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

if (round === 5) {
    rockBtn.disabled = true;
    const victor = document.createElement("div");
    victor.textContent = "The winner is: ";
    container.insertBefore(victor, buttons);
}

rockBtn.addEventListener("click", () => {
    playerChoiceDisplay.textContent = "Rock";
    let userChoice = r;
    processRound(userChoice);
})

paperBtn.addEventListener("click", () => {
    playerChoiceDisplay.textContent = "Paper";
    let userChoice = p;
    processRound(userChoice);
})

scissorsBtn.addEventListener("click", () => {
    playerChoiceDisplay.textContent = "Scissors";
    let userChoice = s;
    processRound(userChoice);
})

function processRound(userChoice) {
    let computerChoice = getComputerChoice();
    compChoiceDisplay.textContent = computerChoice;
    let result = playRound(userChoice, computerChoice);
    winnerInfo.textContent = result;
    if (result === "User wins!") {
        userScore++;
    }
    else if (result === "Computer wins!") {
        compScore++;
    }
    round++;
    console.log(round); //for debug
    roundDisplay.textContent = round;
    userPoints.textContent = `User: ${userScore}`;
    console.log(userPoints.textContent); //for debug
    computerPoints.textContent = `Computer: ${compScore}`;
}


function getComputerChoice() {
    // Randomized computer choice
    let num = Math.floor(Math.random() * 3);
    let compChoice;
    if (num === 0) {
        compChoice = r;
    }
    else if (num === 1) {
        compChoice = p;
    }
    else {
        compChoice = s;
    }
    return compChoice;
}

function getUserChoice() {
    // New getUserChoice function for UI version
    const playerChoice = document.querySelector("player-choice");
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        playerChoice.textContent += "The player pushed a button!";
    })
}


function playRound(playerSelection, computerSelection) {
    // Logic for determining the winner of a single round of play
    let victory = "User wins!";
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === r && computerSelection === s) {
        return victory;
    }
    else if (playerSelection === p && computerSelection === r) {
        return victory;
    }
    else if (playerSelection === s && computerSelection === p) {
        return victory;
    }
    else {
        return "Computer wins!";
    }
}
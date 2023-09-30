const r = "rock";
const p = "paper";
const s = "scissors";

function main() {
    let userChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(userChoice, computerChoice);
    console.log(result);
}

function getComputerChoice() {
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


function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors:");
    return playerChoice.toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    let victory = "You win!";
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
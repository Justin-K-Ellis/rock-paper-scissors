const r = "rock";
const p = "paper";
const s = "scissors";

function main() {
    let rounds = 1;
    let userWins = 0;
    let compWins = 0
    while (rounds <= 5) {
        console.log(`Round ${rounds}!`)
        let userChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(`Player chooses ${userChoice}, computer chooses ${computerChoice}.`)
        let result = playRound(userChoice, computerChoice);
        if (result === "User wins!") {
            userWins++;
        }
        else if (result === "Computer wins!") {
            compWins++;
        }
        console.log(result);
        rounds++;
    }
    console.log(`User wins: ${userWins}. Computers wins: ${compWins}.`)
    if (userWins > compWins) {
        console.log("User is the victor!");
    }
    else if (compWins > userWins) {
        console.log("Computer is the victor!");
    }
    else {
        console.log("It's a tie!");
    }
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
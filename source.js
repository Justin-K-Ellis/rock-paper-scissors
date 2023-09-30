const r = "rock";
const p = "paper";
const s = "scissors";

function main() {
    // Initialize variables for num of rounds and wins.
    let rounds = 1;
    let userWins = 0;
    let compWins = 0
    while (rounds <= 5) {
        // Play five rounds of rock paper scissors, count victories
        // for each player.
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
    // Determine the final winner after five rounds, give feedback to user.
    console.log(`User wins: ${userWins}. Computers wins: ${compWins}.`)
    if (userWins > compWins) {
        console.log("User is the victor!");
    }
    else if (compWins > userWins) {
        console.log("Computer is the victor!");
    }
    else {
        console.log("It's a draw!");
    }
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


function getPlayerChoice() {
    // User input choice
    let playerChoice;
    do {
        playerChoice = prompt("Enter 'rock', 'paper', or 'scissors'.");
    } while (!(playerChoice === r || playerChoice === p || playerChoice === s));
    return playerChoice;
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
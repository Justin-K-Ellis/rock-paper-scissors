const r = "rock";
const p = "paper";
const s = "scissors";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

let playerChoiceDisplay = document.querySelector("#player-choice");
let compChoiceDisplay = document.querySelector("#comp-choice");
let winnerInfo = document.querySelector("#winner-info");

rockBtn.addEventListener("click", () => {
    playerChoiceDisplay.textContent = "Rock";
})

// function main() {
//     // Initialize variables for num of rounds and wins.
//     let rounds = 1;
//     let userWins = 0;
//     let compWins = 0
//     while (rounds <= 1) {
//         // Temporaily reduce to one round.
//         // Play five rounds of rock paper scissors, count victories
//         // for each player.
//         //console.log(`Round ${rounds}!`) // TODO: make DOM method.
//         let computerChoice = getComputerChoice();
//         let userChoice = getUserChoice();
//         //console.log(`User chooses ${userChoice}, computer chooses ${computerChoice}.`) // TODO: make DOM method.
//         let result = playRound(userChoice, computerChoice);
//         if (result === "User wins!") {
//             userWins++;
//         }
//         else if (result === "Computer wins!") {
//             compWins++;
//         }
//         //console.log(result); // TODO: make DOM method.
//         rounds++;
//     }
//     // Determine the final winner after five rounds, give feedback to user.
//     console.log(`User wins: ${userWins}. Computers wins: ${compWins}.`)
//     if (userWins > compWins) {
//         console.log("User is the victor!");
//     }
//     else if (compWins > userWins) {
//         console.log("Computer is the victor!");
//     }
//     else {
//         console.log("It's a draw!");
//     }
// }


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


// function getUserChoice() {
//     // User input choice
//     let userChoice;
//     do {
//         userChoice = prompt("Enter 'rock', 'paper', or 'scissors'.").toLowerCase();
//     } while (!(userChoice === r || userChoice === p || userChoice === s));
//     return userChoice;
// }

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

main();
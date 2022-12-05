const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}



function playRound(playerSelection, computerSelection) {

      if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win, scissors beats paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, rock beats scissors";
    } else {
        return "It's a Tie!"
    }
}



function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
       const choice = prompt("Let's play Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(choices.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        let roundResult = playRound (playerSelection, computerSelection);
        if (roundResult.includes("win")) {
            playerScore++;
        } else {
            computerScore++;
        }
        console.log(roundResult);
    }
    console.log("Game Over")
    if (playerScore > computerScore) {
        return "You won"
    } else if (playerScore < computerScore) {
        return "You Lost"
    } else {
        return "It's a Tie"
    }
}



console.log(game());













/*
function playRound(playerSelection, computerSelection) {
    const choices = {
        scissors: 'paper',
        rock: 'scissors',
        paper: 'rock'
    }

    if (playerSelection === computerSelection) return "It's a Tie!"

    if (choices[playerSelection] === computerSelection){
        return "You win, " + playerSelection + " beat " + computerSelection + ""
    }
    else{
        return "you lose, " + computerSelection + " beat " + playerSelection + ""
    }

  
}
*/



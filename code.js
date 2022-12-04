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
        return "You win, scissors beat paper";
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
        const choice = prompt("Rock Paper Scissors");
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
    for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound (playerSelection, computerSelection));
    }
}

game();












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



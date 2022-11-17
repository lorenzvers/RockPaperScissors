function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
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
    }
}






const computerChoice = getComputerChoice();

console.log("rock", computerChoice)

console.log(playRound("rock", computerChoice));






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



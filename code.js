function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randIndex = Math.floor(Math.random() * arr.length);
    return choices[randIndex];
}

console.log(getComputerChoice());
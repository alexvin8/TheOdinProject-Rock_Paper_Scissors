let playerSelection = 'rock'
let computerSelection = computerPlay();

function computerPlay {
    const computerChoices = ['rock', 'paper', 'scissors'];
    let computerSelect = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerSelect;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "you win";
    }
    else {
        return "you lose";
    }

}
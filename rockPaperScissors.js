let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function computerPlay() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function letterToWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `You Win! ${letterToWords(user)} beats ${letterToWords(computer)}.`; //"You Lose! Paper beats Rock"
}

function lose(user, computer) {
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You Lose! ${letterToWords(computer)} beats ${letterToWords(user)}.`; //"You Lose! Paper beats Rock"
}

function draw(user, computer) {
    result_p.innerHTML = `It's a DRAW! Play one more time!`;
}


function game(userSelection) {
    const computerSelection = computerPlay();
    switch (userSelection + computerSelection) {
        case "pr":
        case "rs":
        case "sp":
            win(userSelection, computerSelection);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userSelection, computerSelection);
            break;
        case "ss":
        case "pp":
        case "rr":
            draw(userSelection, computerSelection);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

}


main();
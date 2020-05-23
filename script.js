const playerSelection = getPlayerChoice();
const computerSelection = computerPlay();

//Convert the random number to a usable string
function computerPlay() {
    let choice = random(3);

    switch (choice) {
        case 0:
            choice = "ROCK";
            break;
        case 1:
            choice = "PAPER";
            break;
        case 2:
            choice = "SCISSORS"
            break;
        default:
            choice = undefined;
    }
    return choice;
}

//Ask the Player for their Input
function getPlayerChoice() {
    let choice = prompt("Rock-Paper-Scissors?"); 
    return choice;
}
//Convert the Input to Uppercase for case insensitivity
function convertPlayerChoice(choice) {
    return choice.toUpperCase();
}

//Get a random Value
function random(value) {
    return Math.floor(Math.random() * Math.floor(value));
}

function playRound(playerSelection, computerSelection) {
    
}

console.log(playerSelection);
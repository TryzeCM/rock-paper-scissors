// The Game
const playerSelection = convertPlayerChoice(getPlayerChoice());
const computerSelection = computerPlay();


//Convert the random Number to a usable String
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

//Check if the Input is the expected Input
function checkPlayerChoice(choice) {
    if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS") {
        return true;
    } 
    return false;
}

//Get a random Value
function random(value) {
    return Math.floor(Math.random() * Math.floor(value));
}

//Evaluates if the Player WINS, LOSES or if it's a DRAW
function playRound(playerSelection, computerSelection) {

    if (checkPlayerChoice(playerSelection)){

        if (playerSelection == computerSelection) {
            alert("It's a DRAW!");
        } else if ( playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
                    playerSelection == "PAPER" && computerSelection == "ROCK" ||
                    playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            alert("You WIN!");
        } else {
            alert("You lose.");
        }
    } else {
        alert("INVALID INPUT");
    }
    
}

playRound(playerSelection, computerSelection);
console.log(playerSelection);
console.log(computerSelection);

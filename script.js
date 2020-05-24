/************************************************TO DO************************************************
 * -fix if statement with function calls for playRound
 * -put win conditions in seperate function
 * -put for loop in function playRound
*/

let playerPoints = 4;
let computerPoints = 4;

// The Game


for (; playerPoints < 5 || computerPoints < 5 ;) {
    let playerSelection = convertPlayerChoice(getPlayerChoice());
    let computerSelection = computerPlay();
    console.log(`P: ${playerPoints} : ${computerPoints} :C`);

    if (playRound(playerSelection, computerSelection)) {
        playerPoints++;
        console.log(playerPoints);
    } else if (playRound(playerSelection, computerSelection) == undefined) {
        console.log(`Draw: ${undefined}`);
    } else {
        computerPoints++;
        console.log(`Computer: ${computerPoints}`)
    }
}











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
            return undefined;

        } else if ( playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
                    playerSelection == "PAPER" && computerSelection == "ROCK" ||
                    playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            alert("You WIN!");
            return true;
        } else {
            alert("You lose.");
            return false;
        }
    } else {
        alert("INVALID INPUT");
        return undefined;
    }
    
}

playRound(playerSelection, computerSelection);
console.log(playerSelection);
console.log(computerSelection);

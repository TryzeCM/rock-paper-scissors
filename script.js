/************************************************TO DO************************************************
 * 
*/

//Global Variables
let playerPoints = 0;
let computerPoints = 0;
let score = document.getElementById("score");

//Initialise Score on Page
score.innerText = `Player ${playerPoints} : ${computerPoints} Computer`;

// The Game put together 

function game() {
    

    while (playerPoints < 5 && computerPoints < 5 ) {                   //plays until 5 points are reached
        
        let playerSelection = convertPlayerChoice(getPlayerChoice());   //gets input from the player and converts it to uppercase
        let computerSelection = computerPlay();                         //randomly asigns a choice of rock, paper or scissors

        playRound(playerSelection, computerSelection);                  //evaluates who wins
        updateScore(playerPoints, computerPoints);                      //updates the p tag on the page
    }
        
}

function updateScore(pPoints, cPoints) {
    score.innerText = `Player ${pPoints} : ${cPoints} Computer`;
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

//Evaluates if the Player WINS, LOSES or if it's a DRAW and increments the points
function playRound(playerSelection, computerSelection) {

    if (checkPlayerChoice(playerSelection)){

        if (playerSelection == computerSelection) {
            alert("It's a DRAW!");
            return undefined;

        } else if ( playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
                    playerSelection == "PAPER" && computerSelection == "ROCK" ||
                    playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            alert("You WIN!");
            return playerPoints++;
        } else {
            alert("You lose.");
            return computerPoints++;
        }
    } else {
        alert("INVALID INPUT");
        return undefined;
    }
    
}

game();


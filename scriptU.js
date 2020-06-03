
let playerPoints = 0;
let computerPoints = 0;
let score = document.getElementById("score");

score.innerText = `Player ${playerPoints} : ${computerPoints} Computer`;

 

function game() {

    clickButton();
}
    
    

function updateScore(pPoints, cPoints) {
    score.innerText = `Player ${pPoints} : ${cPoints} Computer`;
}

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

function clickButton() {

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {

        button.addEventListener("click", () => { 


            let computerSelection = computerPlay();
            playRound(button.id.toUpperCase(), computerSelection);
            updateScore(playerPoints, computerPoints);
            if (playerPoints === 5 || computerPoints === 5) {
                result();
            }

        });
    });
}

function random(value) {
    return Math.floor(Math.random() * Math.floor(value));
}

function playRound(playerSelection, computerSelection) {


        if (playerSelection == computerSelection) {
            updateTextBox(computerSelection,"It's a DRAW!");
            return;

        } else if ( playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
                    playerSelection == "PAPER" && computerSelection == "ROCK" ||
                    playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            updateTextBox(computerSelection, "You WIN!");
            return playerPoints++;
        } else {
            updateTextBox(computerSelection, "You lose.");
            return computerPoints++;
        }
    
}

function result() { 

    removeChild("body", "#buttons-div");
    const resultText = document.createElement("p");
    getWinner(resultText);
    score.appendChild(resultText);

}



function isWinner(pPoints, cPoints) {
    if (pPoints === 5) {
        return true;
    } else if (cPoints === 5) {
        return false;
    }
}

function getWinner(element) {

    if (isWinner(playerPoints, computerPoints)) {
        element.innerText = "You won this Game!";
    } else {
        element.innerText = "The Computer won this Game!";
    }

}

function removeChild(parent, child) {
    const p = document.querySelector(parent);
    const c = document.querySelector(child);
    p.removeChild(c); 
}

function updateTextBox (selection, text) {
    const textField = document.querySelector("#log");
    textField.innerText = `The Computer chose ${selection}\n` + text;
}


game();


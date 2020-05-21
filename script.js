const playerSelection = "rock"
const computerSelection = computerPlay();

function computerPlay() {
    let choice = random(3);

    switch (choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors"
            break;
        default:
            choice = undefined;
    }
    return choice;
}

function random(value) {
    return Math.floor(Math.random() * Math.floor(value));
}

function playRound(playerSelection, computerSelection) {

}

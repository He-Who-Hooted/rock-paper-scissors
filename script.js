game();

function game() {
    console.log("Hello World");
    playGame();
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // randomly return 0, 1, 2
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Type 'rock', 'paper', or 'scissors' into the prompt to play.");
    return userChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // if the game is a tie then print "It's a tie!" and return
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        } else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats scissors!");
                humanScore++;
                return;
            } else {
                console.log("You loose! Rock is defeated by paper!");
                computerScore++;
                return;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("You win! Scissors beat paper!");
                humanScore++;
                return;
            } else {
                console.log("You loose! Scissors are defeated by rock!");
                computerScore++;
                return;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock!");
                humanScore++;
                return;
            } else {
                console.log("You loose! Paper is defeated by scissors!");
                computerScore++;
                return;
            }
        } else {
        // if logic passes to this point then an invalid entry has been made
        console.log("Invalid entry made by user, no points awarded!");
        return;
        }
    }

    console.log("Five rounds of rock, paper, scissors begins now...");
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        console.log("You picked: " + humanChoice);
        console.log("Computer picked: " + computerChoice);

        playRound(humanChoice, computerChoice);

        console.log("Computer " + computerScore + " player " + humanScore)
    }
}
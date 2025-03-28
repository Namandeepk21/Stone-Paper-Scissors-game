
// Selecting elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreSpan = document.querySelector("#user-score");
const compScoreSpan = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

// Function to generate computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

// Function for a draw game
const drawGame = () => {
    msg.innerText = "It's a draw! Play again.";
};

// Function to display winner
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScoreSpan.innerText = userScore; // Update user score
        msg.innerText = "You win!";
    } else {
        compScore++;
        compScoreSpan.innerText = compScore; // Update computer score
        msg.innerText = "You lose!";
    }
};

// Function to play game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin = false;
    if (userChoice === "rock") {
        userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock" ? true : false;
    } else {
        userWin = compChoice === "paper" ? true : false;
    }

    showWinner(userWin);
};

// Adding event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

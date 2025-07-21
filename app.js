let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) return "rock";
    else if (randomNumber < 2 / 3) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function updateScore() {
    scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner() {
    const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
    resultsDiv.textContent += `\n${winner}`;
    disableButtons();
}

function disableButtons() {
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

function handleClick(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    resultsDiv.textContent = result;
    updateScore();
}

document.getElementById("rock").addEventListener("click", () => handleClick("rock"));
document.getElementById("paper").addEventListener("click", () => handleClick("paper"));
document.getElementById("scissors").addEventListener("click", () => handleClick("scissors"));
document.addEventListener("DOMContentLoaded", () => {
    resultsDiv.textContent = "Make your choice!";
    updateScore();
});
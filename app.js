;
function getComputerChoice() {
    randomNumber= Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
  
}
function getHumanChoice() {
    let input=prompt("Enter your choice(rock, paper, scissors):");
    console.log(`You chose: ${input}`);
    return input.toLowerCase();
}
let humanScore=0;
let computerScore=0;
console.log("Welcome to Rock, Paper, Scissors!");
console.log("You will play 5 rounds against the computer.");
function playRound(humanChoice, computerChoice) {
if (computerChoice === humanChoice) {
    console.log(`It's a tie! both chose ${computerChoice});`);
}
else if ((computerChoice === "rock" && humanChoice === "scissors") || 
         (computerChoice === "paper" && humanChoice === "rock") || 
         (computerChoice === "scissors" && humanChoice === "paper")) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;}
else if ((humanChoice === "rock" && computerChoice === "scissors") || 
         (humanChoice === "paper" && computerChoice === "rock") || 
         (humanChoice === "scissors" && computerChoice === "paper")) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;}
}
function playGame(){
    for(let i=0; i<5;i++){
       console.log(`Round ${i + 1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else {
        console.log("Sorry! You lose the game. Better luck next time!");
    }
}
playGame();
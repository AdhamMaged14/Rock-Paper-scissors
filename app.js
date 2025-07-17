console.log("hello world");
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

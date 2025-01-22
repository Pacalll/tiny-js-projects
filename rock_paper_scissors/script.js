// ROCK PAPER SCISSORS 

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdisplay");
const resuldisplay = document.getElementById("resuldisplay");
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

function play(playerChoice){
    resuldisplay.classList.remove("redText", "greenText");
    const computerChoice = choices[Math.floor(Math.random() *3)];

    if(playerChoice === computerChoice){
        resuldisplay.textContent = "IT'S A TIE!";
    }else{
        switch(playerChoice){
            case "rock": resuldisplay.textContent = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
            break;
            case "scissors": resuldisplay.textContent = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
            break;
            case "paper": resuldisplay.textContent = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
            break;
        }
    }

    playerDisplay.textContent = `PLAYER ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER ${computerChoice}`;
    
    switch(resuldisplay.textContent){
        case "YOU WIN!": 
             resuldisplay.classList.add("greenText");
             playerScoreDisplay.textContent = ++playerScore;
             break;
        case "YOU LOSE!":
             resuldisplay.classList.add("redText");
             computerScoreDisplay.textContent = ++computerScore;
             break;
    }
}
// Your First Interactive Game

let playGame = confirm("Shall we play rock, paper, scissors?");

if (playGame) {
    let playerChoice = prompt("Please enter rock, paper, scissors").trim().toLowerCase();

    if (playerChoice) {
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

            let result =
                playerChoice === "rock" && computer === "paper"
                ?`PlayerOne: ${playerChoice}\nComputer: ${computer}\n\nComputer wins!`
                : playerChoice === "paper" && computer === "scissors"
                ?`PlayerOne: ${playerChoice}\nComputer: ${computer}\n\nComputer wins!`
                : playerChoice === "scissors" && computer === "rock"
                ?`PlayerOne: ${playerChoice}\nComputer: ${computer}\n\nComputer wins!`
                : playerChoice === "paper" && computer === "rock"
                ?`PlayerOne: ${playerChoice}\nComputer: ${computer}\n\nYou wins!`
                : playerChoice === "rock" && computer === "scissors"
                ?`PlayerOne: ${playerChoice}\nComputer: ${computer}\n\nYou wins!`
                : playerChoice === "scissors" && computer === "paper"
                ?`PlayerOne: ${playerChoice}\nComputer: ${computer}\n\nYou wins!`
                : `PlayerOne: ${playerChoice}\nComputer: ${computer}\nYour both wins!!!`
            alert(result)

            let playAgain = confirm("Play Again?")
            playAgain ? location.reload() : alert("Thanks!")
        } else {
            alert("You didn't enter rock, paper, scissors.")
            location.reload()
        }
    } else {
        alert("I guess you changed your mine. Maybe next time.")
    }
} else {
    alert("OK, Maybe next time.");
};

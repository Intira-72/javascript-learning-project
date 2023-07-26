// Switch Statements
// Example 1
// switch(Math.floor(Math.random() * 3 + 1)) {
//     case 1:
//         console.log("Case: One");
//         break;

//     case 2:
//         console.log("Case: Two");
//         break;

//     case 3:
//         console.log("Case: Tree");
//         break;    

//     default:
//         console.log("No Case");
//         break;    
// }


// Example 2
let player = "rock";
let computer = "paper";

switch (computer) {
    case "rock":
        if (player === "paper") {
            console.log("Player wins!");
        } else {
            console.log("Computer wins!");
        }
        break;

    case "paper":
        if (player === "scissors") {
            console.log("Player wins!");
        } else {
            console.log("Computer wins!");
        }
        break;

    case "scissors":
        if (player === "rock") {
            console.log("Player wins!");
        } else {
            console.log("Computer wins!");
        }
        break;

    default:
        console.log("first")
        break;
}
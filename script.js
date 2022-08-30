// 1 - Callingback the functions that Starts the game.
document.addEventListener("DOMContentLoaded", start);

// 2 - Create a variable with othe ptions (for the computer and the player).
const options = ["rock", "paper", "scissors"];
// 3 - Variables for the players (Hands)
const playerHand = document.querySelector("#player1");
const computerHand = document.querySelector("#player2");
// 4 - And One for the PLayer choise (to be defined).
let playerChoice;

// 5 Adding Event listener clicks for the 3 buttons. Callingback 3 functions.
function start() {
  document.querySelector(".rock").addEventListener("click", userPlayRock);
  document.querySelector(".paper").addEventListener("click", userPlayPaper);
  document.querySelector(".scissors").addEventListener("click", userPlayScissors);
}

// 6 - When click --> Shake, Change the image and call the computer to play.
function userPlayRock() {
  playerHand.classList.add("shake");
  computerHand.classList.add("shake");
  // Computer plays! Call back the function.
  computerPlay();
  // When the animation ends change the image in the hand.
  playerHand.addEventListener("animationend", () => {
    playerHand.style.backgroundImage = "url('hand_rock.png')";
    //When shakes ends change the class of the ID of the player's hand. And callback timeout.
  });
  playerChoice = options[0];
  console.log("Player:", playerChoice);
}

function userPlayPaper() {
  // First hands shake.
  playerHand.classList.add("shake");
  computerHand.classList.add("shake");
  // Computer plays! Call back the function.
  computerPlay();
  // When the animation ends change the image in the hand.
  playerHand.addEventListener("animationend", () => {
    playerHand.style.backgroundImage = "url('hand_paper.png')";
    //When shakes ends change the class of the ID of the player's hand. And callback timeout.
  });
  // Define the value of the playerChoise.
  playerChoice = options[1];
  //Console log to see.
  console.log("Player:", playerChoice);
}

function userPlayScissors() {
  playerHand.classList.add("shake");
  computerHand.classList.add("shake");
  // Computer plays! Call back the function.
  computerPlay();
  playerHand.addEventListener("animationend", () => {
    playerHand.style.backgroundImage = "url('hand_scissors.png')";
    //When shakes ends change the class of the ID of the player's hand. And callback timeout.
  });
  playerChoice = options[2];
  console.log("Player:", playerChoice);
}

// 7 - Computer need to play now - Function called back from userPlay();.
function computerPlay() {
  // 8 - This functions generates a Random Number with Math.floor the computer Choise (It will be the computerNumber).
  let computerNumber = Math.floor(Math.random() * 3);
  let computerChoice = options[computerNumber];
  //Just a console log to see what happens.
  console.log("Computer:", computerChoice);
  //When the shake animation ends change the class of #player2
  computerHand.addEventListener("animationend", () => {
    computerHand.className = "player " + computerChoice;
  });

  // 8 - When time is out we need to compare the hands.
  setTimeout(compareHands, 3200);
  console.log("timeOut");

  // 9 - Show results from Conditions & Comparitions!!!
  //It is a function another other function.
  function compareHands() {
    // THIS FUNCTION IS INSIDE THE OTHER

    if (playerChoice === computerChoice) {
      document.getElementById("draw").classList.remove("hidden");
    }

    //Check for Rock-Scissors (Win)
    if (playerChoice == "rock" && computerChoice == "scissors") {
      document.querySelector("#win").classList.remove("hidden");
    }

    //Check for Rock-Paper (Lose)
    if (playerChoice == "rock" && computerChoice == "paper") {
      document.querySelector("#lose").classList.remove("hidden");
    }

    //Check for Paper-Scissors (Lose)
    if (playerChoice == "paper" && computerChoice == "scissors") {
      document.querySelector("#lose").classList.remove("hidden");
    }

    //Check for Paper-Rock (Win)
    if (playerChoice == "paper" && computerChoice == "rock") {
      document.querySelector("#win").classList.remove("hidden");
    }

    //Check for Scissors-Paper (Win)
    if (playerChoice == "scissors" && computerChoice == "paper") {
      document.querySelector("#win").classList.remove("hidden");
    }

    //Check for Scissors-Rock (Lose)
    if (playerChoice == "scissors" && computerChoice == "rock") {
      document.querySelector("#lose").classList.remove("hidden");
    }

    console.log("Compare");

    setTimeout(restart, 2400);
  }
}

// 10 - Finish, now restart.
function restart() {
  //Hand Rock again.
  playerHand.style.backgroundImage = "url('hand_rock.png')";
  playerHand.className = "player";
  computerHand.className = "player";
  //Hidden results
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  //Removing shake class.
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
}

// if(condition1) {
//   if(condition2) {
//     code if both pass
// } else {
//     code if 1 passes, 2 fails
// }
// } else {
// code if 1 fails
// }

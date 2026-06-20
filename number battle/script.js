let userScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll(".num-btn");
let resetBtn = document.getElementById("resetBtn");
let winnerText = document.getElementById("winner");

buttons.forEach(function (btn) {
  btn.onclick = function () {

    // Stop game after someone reaches 5
    if (userScore === 5 || computerScore === 5) {
      return;
    }

    let userNumber = Number(btn.textContent);
    let computerNumber = Math.floor(Math.random() * 5) + 1;

    if (userNumber > computerNumber) {
      userScore++;
      winnerText.textContent = "You Win this round ";
      winnerText.style.color = "green";
    }
    else if (userNumber < computerNumber) {
      computerScore++;
      winnerText.textContent = "You Lose this round ";
      winnerText.style.color = "red";
    }
    else {
      winnerText.textContent = "Draw ";
      winnerText.style.color = "orange";
    }

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;

    // Final winner color
    if (userScore === 5) {
      winnerText.textContent = " YOU WON THE GAME!";
      winnerText.style.color = "blue";
    }
    else if (computerScore === 5) {
      winnerText.textContent = " COMPUTER WON THE GAME!";
      winnerText.style.color = "blue";
    }
  };
});

// Reset game
resetBtn.onclick = function () {
  userScore = 0;
  computerScore = 0;

  document.getElementById("userScore").textContent = 0;
  document.getElementById("computerScore").textContent = 0;

  winnerText.textContent = "Game Reset! Play again";
  winnerText.style.color = "black";
};

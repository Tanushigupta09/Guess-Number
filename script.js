//dom
//Documen Object model

// console.log(document.querySelector(".message"));
//console.log(document.querySelector(".message").textContent="Hello World");
//* variables
let randomNumber, chances;

//* initial condition
function init() {
  chances = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage("Game Status...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".chance").textContent = chances;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#111111";
}
init();

function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

//* Check btn
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    //* no input
    displayMessage("No Number 🚫");
  } else if (guessNumber === randomNumber) {
    //* correct input
    displayMessage("Correct Number 🏆");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guessNumber !== randomNumber) {
    if (chances > 1) {
      let msg = guessNumber > randomNumber ? "Too High 👆" : "Too Low 👇";
      displayMessage(msg);
      chances--;
      document.querySelector(".chance").textContent = chances;
    } else {
      displayMessage("Game Over 💥");
      document.querySelector(".chance").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff2c2c";
    }
  }
});

//* Restart btn
document.querySelector(".restart").addEventListener("click", init);

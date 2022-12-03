let computerScore = 0;
let userScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const endGame_div = document.getElementById("end");

function getComputerChoice() {
  const choises = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choises[randomNumber];
}
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUser = "(user)".fontsize(3).sub();
  const smallComp = "(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUser} Beats ${convertToWord(
    computerChoice
  )}${smallComp}. You Win ! 🔥`;

  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    300
  );
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUser = "(user)".fontsize(3).sub();
  const smallComp = "(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    computerChoice
  )}${smallComp} Beats ${convertToWord(userChoice)}${smallUser}. You Lose ! 👎`;

  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    300
  );
}
function draw(userChoice, computerChoice) {
  result_p.innerHTML = " DRAW ";

  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("gray-glow"),
    300
  );
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
}
function endGame() {
  document.getElementById("all").remove();
  var x = document.createElement("IMG");
  x.setAttribute("src", "./components/the_rock.png");
  x.setAttribute("width", "500");
  x.setAttribute("height", "500");

  const r = document.createElement("p") ;
  r.innerText = "ROCK Rocks...    HAHAHA !";
  document.body.appendChild(r);
  setTimeout(() => document.body.appendChild(x), 300);
 
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissor_div.addEventListener("click", () => game("s"));
  endGame_div.addEventListener("click", () => endGame());
}
main();

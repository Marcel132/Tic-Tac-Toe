// GET PART OF BOARD (DIV) FROM DOCUMENT HTML
const partOfBoard = document.querySelectorAll(".part-of-board");
const result = document.querySelector("#result");
let userMove = true;

for(const parts of partOfBoard) {
  parts.addEventListener("click", function(event) {
    if(event.target.textContent === "") {
      event.target.textContent = userMove ? "X" : "O";
      userMove = !userMove;
      checkWinner();
    }
  });
}

function checkWinner() {
  const wins = [ 
    [0, 1, 2], //ROW
    [3, 4, 5], //ROW
    [6, 7, 8], //RO W

    [0, 3, 6], //COLUMN
    [1, 4, 7], //COLUMN
    [2, 5, 8], //COLUM  N

    [0, 4, 8], //CROSS
    [2, 4, 6], //CROSS  
  ];
  for(const win of wins) {
    const [a, b, c] = win;
    if (
      partOfBoard[a].textContent === partOfBoard[b].textContent &&
      partOfBoard[a].textContent === partOfBoard[c].textContent &&
      partOfBoard[a].textContent !== ""
    ) {
      result.textContent = partOfBoard[a].textContent + " wygrał!";
      return;
    }
  }
  
  let draw = true;
  for (const part of partOfBoard) {
    if (part.textContent === "") {
    draw = false;
    break;
    }
  }
  if (draw) {
    result.textContent = "Remis!";
  }
}


//RESTART BUTTON 
const btnRestart = document.getElementById("btn-restart");
function restart() {
  window.location.reload(true);
}
btnRestart.addEventListener("click", restart);

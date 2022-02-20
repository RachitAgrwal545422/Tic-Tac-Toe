console.log("Welcome to tic tac toe");
let music = new Audio("./assets/music.mp3");
let turn_change = new Audio("./assets/ting.mp3");
let gameOver = new Audio("./assets/gameover.mp3");
let turn = "X";
//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to check for a win
const checkWin = () => {
  let boxText = 
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach(() => {
    
  })
};

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let box_Text = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (box_Text.innerText === "") {
      box_Text.innerText = turn;
      turn = changeTurn();
      turn_change.play();
      checkWin();
      document.getElementById("info").innerText = "turn for " + turn;
    }
  });
});
//39.25
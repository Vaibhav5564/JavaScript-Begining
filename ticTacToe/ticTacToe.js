alert("Welcome Guys .......  \n Enjoy!!!!\nTic Tac Toe Game");
let player1 = prompt("Enter Name Player 1");
let player2 = prompt("Enter Name Player 2");
let btn = document.querySelectorAll(".game");
let resetButton = document.querySelector(".reset");
let winnerClass = document.querySelector(".win");
let newGame = document.querySelector(".newGame");
let turnO = true;
let count = 0;
let winPattern = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
];

newGame.addEventListener("click", () => {
       btn.forEach((box) => {
              box.innerText = "";
              box.disabled = false;
       });
       newGame.style.visibility = "hidden";
       resetButton.classList.remove("hide");
       winnerClass.innerText = "";
       turnO = true;
});

const showWinner = (val) => {
       if (val === "X" && player1===null && player2===null){
              winnerClass.innerText = `Congratulations Winner is ${val}`;
              winnerClass.style.color="red";
       }
       else if (val === "O" && player1===null && player2===null){
              winnerClass.innerText = `Congratulations Winner is ${val}`;
       winnerClass.style.color="blue";
       }
       else if (val === "X"){
              winnerClass.innerText = `Congratulations Winner is ${player1}`;
              winnerClass.style.color="red";
       }
       else {
              winnerClass.innerText = `Congratulations Winner is ${player2}`;
              winnerClass.style.color="blue";
       }
       winnerClass.classList.remove("hide");
       newGame.style.visibility = "visible";
       resetButton.classList.add("hide");

};
let disableBoxes = () => {
       btn.forEach((disButton) => {
              disButton.disabled = true;
       })
}
const isWinner = () => {
       for (let pattern of winPattern) {
              let val1 = btn[pattern[0]].innerText;
              let val2 = btn[pattern[1]].innerText;
              let val3 = btn[pattern[2]].innerText;
              if (val1 != "" && val2 != "" && val3 != "") {
                     if (val1 === val2 && val1 === val3) {
                            count = 0;
                            disableBoxes();
                            showWinner(val1);
                     }
              }
       }
}
gameClicked = (box) => {
       count++;
       if (turnO === true) {
              box.innerText = "X";
              box.style.color="red";
              turnO = false;
       }
       else {
              box.innerText = "O";
              box.style.color="blue";
              turnO = true;
       }
       box.disabled = true;
       isWinner();
       if (count === 9) {
              winnerClass.innerText = `Match Drawn Play Again`;
              count = 0;
              winnerClass.classList.remove("hide");
              newGame.style.visibility = "visible";
              resetButton.classList.add("hide");
       }
}
btn.forEach((box) => {
       box.addEventListener("click", () => {
              gameClicked(box);
       });
});

resetGame = () => {
       btn.forEach((resetVal) => {
              winnerClass.innerText = "";
              resetVal.innerText = "";
              resetVal.disabled = false;
       });
}
resetButton.addEventListener("click", resetGame);


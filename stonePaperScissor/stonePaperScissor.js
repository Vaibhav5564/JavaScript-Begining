let option = document.querySelectorAll(".option");
let yourScore = document.querySelector(".yourScore");
let compScore = document.querySelector(".compScore");
let result = document.querySelector(".finalResult");
let resultDiv = document.querySelector(".result");
let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let yScore = 0;
let cScore = 0;

let winner = (userWin,userChoice,compChoice) => {
       if(userWin){
              yScore++;
              yourScore.innerText = yScore;
              result.innerText = `Congrats You Win !! Comp Chooses ${compChoice}`;
              resultDiv.style.backgroundColor = "green"; 
       }
       else{
              cScore++;
              compScore.innerText = cScore;
              result.innerText = `Better Luck Next Time You Loose!! Comp Chooses ${compChoice}`;
               resultDiv.style.backgroundColor = "red";
       }
}

let playGame = (userChoice) => {
       let arr = ["stone","paper","scissor"];
       let random = Math.floor(Math.random()*3)
       let compChoice = arr[random];
       if(userChoice === compChoice){
              result.innerText = `Match Drawn !! Comp Chooses ${compChoice}`;
              resultDiv.style.backgroundColor = "white"; 
       }
       else{
              let userWin;
              if(userChoice === "stone"){
                     userWin = compChoice === "scissor" ? true : false; 
              }
              else if(userChoice === "paper"){
                     userWin = compChoice === "stone" ? true : false; 
              }
              else if(userChoice === "scissor"){
                     userWin = compChoice === "paper" ? true : false; 
              }
              winner(userWin,userChoice,compChoice);
       }
}
option.forEach((opt) =>{
       opt.addEventListener("click", () => {
              let userChoice = opt.getAttribute("id");
              playGame(userChoice);
       });
});

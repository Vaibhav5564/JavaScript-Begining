let score = 0;
let cross = true;
document.onkeydown = function(e){
       if(e.keyCode == 38){
             let cat = document.querySelector(".cat");
             cat.classList.add("animateCat");
             setTimeout(()=>{
              cat.classList.remove("animateCat");
             },500);
       }
       if(e.keyCode == 39){
             let cat = document.querySelector(".cat");
             let cx=  parseInt(window.getComputedStyle(cat,null).getPropertyValue('left'));
             cat.style.left = (cx + 60) + "px";
       }
       if(e.keyCode == 37){
             let cat = document.querySelector(".cat");
             let cx=  parseInt(window.getComputedStyle(cat,null).getPropertyValue('left'));
             cat.style.left = (cx  - 60) + "px";
       }
}

setInterval(() =>{
          let cat = document.querySelector(".cat");
          let gameOver = document.querySelector(".gameOver");
          let obstacle = document.querySelector(".obstacle");

          let cx=  parseInt(window.getComputedStyle(cat,null).getPropertyValue('left'));
          let cy=  parseInt(window.getComputedStyle(cat,null).getPropertyValue('top'));
          let ox=  parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
          let oy=  parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

          let offsetX = Math.abs(cx-ox);
          let offsetY = Math.abs(cy-oy);
          if(offsetX  < 73 && offsetY < 52){
              gameOver.style.visibility = "visible";
              obstacle.classList.remove("obstacleAnimation");
              
          }else if(offsetX < 50 && cross){
               score+=1;
               updateScore(score);
               cross = false;
               setTimeout(()=>{
                     cross = true;
               },500);
          setTimeout(()=>{
          let aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
          let newDur = aniDur - 0.1;
          if(newDur > 1.15)
          obstacle.style.animationDuration = newDur+"s";
          },100);
              }
},10);

function updateScore(score){
       let scoreBoard = document.querySelector("#score");
       scoreBoard.innerText = "Your Score : "+score;
}
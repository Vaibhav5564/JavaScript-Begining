hour = document.querySelector(".hour");
minute = document.querySelector(".minute");
second = document.querySelector(".second");
hcounter = document.querySelector(".hcounter");
mcounter = document.querySelector(".mcounter");
scounter = document.querySelector(".scounter");
setInterval( () =>{
     d = new Date();
     htime = d.getHours();
     mtime = d.getMinutes();
     stime = d.getSeconds();
     hrotation = 30*htime + mtime/2; 
     mrotation = 6*mtime;
     srotation = 6*stime;
     hour.style.transform = `rotate(${hrotation}deg)`;
     minute.style.transform = `rotate(${mrotation}deg)`;
     second.style.transform = `rotate(${srotation}deg)`;

     if(hcounter.innerText != htime){
       hcounter.innerText = htime;
     }
     if(mcounter.innerText != mtime){
       mcounter.innerText = mtime;
     }
     scounter.innerText = stime;

},1000);
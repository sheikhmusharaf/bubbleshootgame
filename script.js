var clutter = " ";

for (var i = 1; i <= 120; i++) {
    var random = Math.floor(Math.random() * 20);
    clutter += `<div class=bubble>${random}</div>`
}
const clicker = document.querySelector("#pbtm").innerHTML = clutter;/////making bubbles using js

var time =150;
var score=0;
hitrn=0;
function increaseScore(){
    score+=10;
    
    document.querySelector("#scoreval").textContent=score;
}


function newHit() {
    hitrn=Math.floor(Math.random()*20);
    document.querySelector("#hitval").textContent=hitrn;


}
function makeBubble() {
    var clutter = " ";

for (var i = 1; i <= 120; i++) {
    var random = Math.floor(Math.random() * 20);
    clutter += `<div class=bubble>${random}</div>`
}
const clicker = document.querySelector("#pbtm").innerHTML = clutter;
    
}

function runTimer() {
    var timer = setInterval(function () {

        if (time > 0) {
            time--;
            document.querySelector("#timerval").textContent = time;
        }
        
        else {
            clearInterval(timer);

            var game=document.querySelector("#pbtm");
            game.style.color="red";
            game.style.backgroundColor="pink";
            game.style.fontSize="25px";
            game.innerHTML=`<h1>Game Over</h1>`;
            game.style.backgroundColor="white";
            game.style.backgroundImage="url(https://w0.peakpx.com/wallpaper/440/3/HD-wallpaper-monkey-fdg-gfd.jpg)";
            game.style.objectFit="cover";
            game.style.backgroundSize="cover";
            
            function musicer(){
                
            const music=new Audio();
            music.src="gameover.mp3";
            music.type="audio/mp3";
            music.addEventListener("canplaythrough",()=>{
                music.play();
            });

            music.addEventListener("error",(error)=>{
                throw new Error("error loading",error);
            });

        }
        musicer();

    
     
        }
    }, 1000)

}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickednum=(Number(dets.target.textContent))

    if(clickednum  ===  hitrn)
    {
        increaseScore();
        newHit();
        makeBubble();
     
    }
    


})

runTimer();
increaseScore();
newHit();
makeBubble();








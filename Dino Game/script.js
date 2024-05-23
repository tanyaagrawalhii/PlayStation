var dino = document.getElementById("dino");
var cactus =document.getElementById("cactus");
var result = document.getElementById("result");
var game = document.getElementById("game");
var score = document.getElementById("score");
var count = 0;
audiogo = new Audio('GameOver.mp3');
audio = new Audio('sound.mp3');


 function jump(){
     dino.style.top = "40px";
     
     setTimeout(function(){
        dino.style.top="150px";
        audio.play();
         
     },400);
     
    count++
}


window.addEventListener("keydown", jump);

//parseInt function convert string to int
// window.getComputedStyle(cactus) return all the css property of cactus



setInterval(function gameOver(){
    var blockleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    var characterTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if((blockleft < 100) && (characterTop > 70)){
         result.style.display = "block";
         
         game.style.display = "none";
        
         score.innerHTML = `Score : ${count}`;
         audiogo.play();
         setTimeout(()=>{
            audiogo.pause();
            audio.pause();
         },2000);
        }
},10);


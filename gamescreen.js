var a = document.getElementById("inner");
var scoreCard = document.getElementById("score");
var outer = document.getElementById("outer");
var color =0;
// var x, y;
var score = 0;
// a.addEventListener('mousemove', e => {
//   x = e.offsetX;
//   y = e.offsetY;
//   // document.getElementById("para").innerHTML = x + " " + y;
// });

a.addEventListener('mouseover', e => {
    if(score % 100 == 0 && color <= 239 && score !== 0){
        color = color + 20;
        outer.style.backgroundColor = "rgb("+ color + "," + color + "," + color + ")";
    }
    a.style.backgroundColor = "red";
    a.style.transitionDuration = "0s";
    a.style.top = getRndInteger(100,500) + "px";
    a.style.left = getRndInteger(75,1000) + "px";
    score+=10;
    scoreCard.innerHTML = "Score: " + score;
});

a.addEventListener('mouseout', e => {
  a.style.backgroundColor = "white";
  a.style.transitionDuration = "1s";  
});

  
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1))  + min;
}

$(document).ready(function(){
    $(window).load(function(){
    $(".preloader").fadeOut("slow");
});
});

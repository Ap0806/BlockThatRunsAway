var a = document.getElementById("inner");
var scoreCard = document.getElementById("score");
var outer = document.getElementById("outer");
var color = 0;
var bad = document.querySelectorAll(".badBlocks");
var score = 0;

a.addEventListener('mouseover', e => {
    a.style.backgroundColor = "red";
    a.style.transitionDuration = "0s";
    a.style.top = getRndInteger(100,700) + "px";
    a.style.left = getRndInteger(130,1350) + "px";
    score+=10;
    scoreCard.innerHTML = "Score: " + score;
    if(score == 1200){
        outer.style.backgroundColor = "white";
        outer.style.border = "5px solid black";
        outer.style.textAlign = "center";
        outer.style.fontFamily = "Muli";
        outer.style.fontSize = "5em";
        outer.style.lineHeight - "20vw";
        outer.style.transition = "background-color 0.2s, border 0.2s";
        outer.innerHTML = "You won!";
        return;
    }
    if(score % 100 == 0 && color <= 239 && score !== 0){
        color = color + 20;
        outer.style.backgroundColor = "rgb("+ color + "," + color + "," + color + ")";
    }    
    if(score % 60 == 0){
        createNewDiv();
    }

});


a.addEventListener('mouseout', e => {
  a.style.backgroundColor = "white";
  a.style.transitionDuration = "1s";  
});

function createNewDiv() {
    var d = document.createElement("div");
    d.style.width = "20px";
    d.style.height = "20px";
    d.style.backgroundColor = "red";
    d.class = "badBlocks";
    d.style.position = "absolute";
    d.style.top = getRndInteger(100,700) + "px";
    d.style.left = getRndInteger(130,1350) + "px";
    document.getElementById("outer").appendChild(d);
    outer.lastChild.addEventListener('mouseover', e=> {
        outer.style.backgroundColor = "white";
        outer.style.border = "5px solid black";
        outer.style.textAlign = "center";
        outer.style.fontFamily = "Muli";
        outer.style.fontSize = "5em";
        outer.style.padding = "0";
        outer.style.transition = "background-color 0.2s, border 0.2s";
        outer.style.paddingTop = "500px";
        outer.innerHTML = "Sorry, you lost. <br> Final Score : "+ score;

    });
}
  
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1))  + min;
}

$(document).ready(function(){
    $(window).load(function(){
    $(".preloader").fadeOut("slow");
});
});

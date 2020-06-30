var a = document.getElementById("inner");
var scoreCard = document.getElementById("score");
var outer = document.getElementById("outer");
var color = 0;
var bad = document.querySelectorAll(".badBlocks");
var score = 0;
var body = document.getElementById("body");
var info = document.getElementById("info");
var heading = document.getElementById("header");
var setting = 60;

// HAVE TO ADD A SETTING ELEMENT TO THIS - ]
// EASY, MEDIUM, HARD, - ACCORDING, WILL 
// ADD BLOCKS FASTER OR SLOWER

a.addEventListener('mouseover', e => {
    a.style.backgroundColor = "red";
    a.style.transitionDuration = "0s";
    a.style.top = getRndInteger(100,700) + "px";
    a.style.left = getRndInteger(130,1350) + "px";
    score+=10;
    scoreCard.innerHTML = "Score: " + score;
    if(score == 1200){
        outer.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
        outer.style.color = "white";
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
        body.style.backgroundColor = "rgb("+ color + "," + color + "," + color + ")";
    }    
    else if(score > 1000){
        outer.style.backgroundColor = "rgb(255,255,255)";
        body.style.backgroundColor = "rgb(255,255,255)";
        heading.style.color = "black";
        info.style.color = "black";
        scoreCard.style.color = "black";
    }

    if(score % setting == 0){
        createNewDiv();
    }

});


a.addEventListener('mouseout', e => {
  a.style.backgroundColor = "white";
  a.style.transitionDuration = "0.1s";  
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
        outer.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
        // outer.style.border = "5px solid black";
        outer.style.textAlign = "center";
        outer.style.fontFamily = "Muli";
        outer.style.fontSize = "5em";
        outer.style.padding = "0";
        outer.style.transition = "background-color 0.2s, border 0.2s, color 0.2s";
        outer.style.paddingTop = "100px";
        outer.style.color = "white";
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

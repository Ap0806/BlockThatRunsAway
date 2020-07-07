var a = document.getElementById("inner");
var scoreCard = document.getElementById("score");
var outer = document.getElementById("outer");
var backButton = document.getElementsByClassName('butt')[0];
var color = 0;
var bad = document.querySelectorAll(".badBlocks");
var score = 0;
var body = document.getElementById("body");
var info = document.getElementById("info");
var heading = document.getElementById("header");
var timer = document.getElementById("timer");
var finalTarget, setting, redSpeed, isAnimated;
let flag = 1;
let s = 59;
outer.style.top = "90px";
var playB = document.getElementById("playbutton");
var level = document.getElementById("levelsDiv");

// HAVE TO ADD A SETTING ELEMENT TO THIS - ]
// EASY, MEDIUM, HARD, - ACCORDING, WILL 
// ADD BLOCKS FASTER OR SLOWER


//FIX THE EASY, MEDIUM, HARD BUTTON PROBLEM AND THEN COME BACK TO TIMER - MAKE IT A CALL BACK FUNCTION.
// var x = setInterval(function(){    
//     if(flag == 1){
//         flag = 0;
//         timer.innerHTML = "1:00";
//     }
//     else if(s<10){
//         timer.innerHTML = "0:0" + s;
//         s = s - 1;       
//     }
//     else{
//         timer.innerHTML = "0:" + s;
//          s = s - 1;
//     }  
//     if(s < 0){
//         clearInterval(x);
//         losingText();
//     }    
// }, 1000); //check every second


function startGame(levelOfDiff, addingEventListeners){
    if(levelOfDiff == 'med'){
        setting = 80;
        finalTarget = 900;
        isAnimated = 't';
        redSpeed = '10s';
    }
    else if(levelOfDiff == 'hard'){
        setting = 60;
        finalTarget = 700;
        isAnimated = 't';
        redSpeed = '5s';
    }
    else
    {
        setting = 100;
        finalTarget = 1200;
        isAnimated = 'f';
        redSpeed = '0';
    }
    window.location.href = 'gamescreen.html';
}

$(document).ready(function() {
    a.addEventListener('mouseover', e => {
        a.style.backgroundColor = "red";
        a.style.transitionDuration = "0s";
        a.style.top = getRndInteger(100,700) + "px";
        a.style.left = getRndInteger(130,1250) + "px";
        score+=10;
        scoreCard.innerHTML = "Score: " + score;
        if(score == finalTarget){
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

        if(score % 60 == 0){
            createNewDiv();
        }

        if(score % setting == 0 && color <= 239 && score !== 0 && score < (finalTarget - 200)){
            color = color + 20;
            outer.style.transition = "background-color 0.5s";
            body.style.transition = "background-color 0.5s";
            backButton.style.transition = "background-color 0.5s";
            outer.style.backgroundColor = `rgb(${color},${color},${color})`;
            body.style.backgroundColor = `rgb(${color},${color},${color})`;
            backButton.style.backgroundColor = `rgb(${color},${color},${color})`;
        }    
        else if(score >= (finalTarget - 200)){
            outer.style.transition = "background-color 0.5s";
            body.style.transition = "background-color 0.5s";
            backButton.style.transition = "background-color 0.5s";
            outer.style.backgroundColor = "rgb(255,255,255)";
            body.style.backgroundColor = "rgb(255,255,255)";
            backButton.style.backgroundColor = "rgb(255,255,255)";
            heading.style.color = "black";
            info.style.color = "black";
            scoreCard.style.color = "black";
        }

    });

a.addEventListener('mouseout', e => {
    a.style.backgroundColor = "white";
    a.style.transitionDuration = "0.1s";  
});

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
    if(isAnimated == 't'){
        alert("yes");
        d.style.animation =  redSpeed + " infinite upanddown";
    }
    document.getElementById("outer").appendChild(d);
    outer.lastChild.addEventListener('mouseover', e=> {
        losingText();
    });
}
  
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1))  + min;
}

function losingText(){
    outer.style.backgroundColor = "black";
    body.style.backgroundColor = "black";
    outer.style.textAlign = "center";
    outer.style.fontFamily = "Muli";
    outer.style.fontSize = "5em";
    outer.style.padding = "0";
    outer.style.transition = "background-color 0.2s, border 0.2s, color 0.2s";
    outer.style.paddingTop = "100px";
    outer.style.color = "white";
    outer.innerHTML = `Sorry, you lost. <br> Final Score : ${score}`;
    backButton.style.backgroundColor = "rgb(0,0,0)";
}

// function backButton(whereTo){
//     if(whereTo.equals('home')){
//         window.location.href = 'index.html';
//     }
//     else if(whereTo == 'inLevel'){
//         playB.style.display = "block";
//         levelsDiv.style.display = "none";
//     }
// }

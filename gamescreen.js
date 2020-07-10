var whiteBox = document.getElementById("inner");
var outer;
var scoreCard = document.getElementById("score");
var backButton = document.getElementsByClassName('butt')[0];
var levelDescr = document.getElementById("description");
var color = 0;
var score = 0;
var forDialogueDrop = 0;
var setting, finalTarget, isAnimated, redSpeed, min, sec;
var body = document.getElementById("body");
var info = document.getElementById("info");
var heading = document.getElementById("header");
var timer = document.getElementById("timer");
var setting = 60;
let flag = 1;
let s = 59;
var timerInterval;
var playB = document.getElementById("playbutton");
var levelDiv = document.getElementById("levelsDiv");
var dialogueBox = document.getElementById("dialogueBox");
var sideText = document.getElementById("sideMessage");


function playButtonClick(){
  levelDiv.style.display = "block";
  playB.style.display = "none";
  backButton.style.display = "block";
}

function startGame(levelOfDiff){
    if(levelOfDiff == 'med'){
        setting = 80;
        finalTarget = 900;
        isAnimated = 't';
        redSpeed = '10s';
        min = 1;
        sec = 10;
    }
    else if(levelOfDiff == 'hard'){
        setting = 60;
        finalTarget = 700;
        isAnimated = 't';
        redSpeed = '5s';
        min = 1;
        sec = 0;
    }
    else
    {
        setting = 100;
        finalTarget = 1200;
        isAnimated = 'f';
        redSpeed = '0';
        min = 1;
        sec = 30;
    }
    forDialogueDrop = 1;
    levelDescr.style.display = "none";
    levelDiv.style.display = "none";
    whiteBox.style.display = "block";
    scoreCard.style.display = "block";
    timer.style.display = "block";
    sideText.style.display = "none";
    displayTime();    
}  
 


whiteBox.addEventListener('mouseover', e => {
    whiteBox.style.backgroundColor = "red";
    whiteBox.style.transitionDuration = "0s";
    whiteBox.style.top = getRndInteger(100,700) + "px";
    whiteBox.style.left = getRndInteger(130,1250) + "px";
    score+=10;
    scoreCard.innerHTML = "Score: " + score;
    if(score == finalTarget){
        winningText();
        return;
    }

    if(score % 100 == 0 && color <= 239 && score !== 0 && score <= (finalTarget - 200)){
        color = color + 20;
        body.style.transition = "background-color 0.5s";
        backButton.style.transition = "background-color 0.5s";
        body.style.backgroundColor = "rgb("+ color + "," + color + "," + color + ")";
        backButton.style.backgroundColor = "rgb("+ color + "," + color + "," + color + ")";

    }    
    else if(score > (finalTarget - 200)){
        body.style.transition = "background-color 0.5s";
        backButton.style.transition = "background-color 0.5s";
        if(finalTarget == 700){
            body.style.backgroundColor = "rgb(255,255,255)";
            backButton.style.backgroundColor = "rgb(255,255,255)";
        }
        else{
            body.style.backgroundColor = "rgb(250,250,250)";
            backButton.style.backgroundColor = "rgb(250,250,250)";
        }
        heading.style.color = "black";
        info.style.color = "black";
        scoreCard.style.color = "black";
        timer.style.color = "black";
    }

    if(score % setting == 0){
        createNewDiv();
    }
});


whiteBox.addEventListener('mouseout', e => {
  whiteBox.style.backgroundColor = "white";
  whiteBox.style.transitionDuration = "0.1s";  
});


function createNewDiv() {
    var d = document.createElement("div");
    d.style.width = "20px";
    d.style.height = "20px";
    d.style.backgroundColor = "red";
    d.className = "badBlocks";
    d.style.position = "absolute";
    d.style.top = getRndInteger(100,700) + "px";
    d.style.left = getRndInteger(130,1350) + "px";
    if(isAnimated == 't'){
        console.log("WE ARE HERE WHY ARE YOU NOT MOVING");
        d.style.animation = "10s infinite upanddown";
    }
    document.getElementById("body").appendChild(d);
    body.lastChild.addEventListener('mouseover', e=> {
        losingText();
    });
}
  
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1))  + min;
}

function losingText(){
    forDialogueDrop = 2;
    outer= document.createElement('p');
    var bad = document.querySelectorAll(".badBlocks");
    for(var i  = 0; i < bad.length; i++){
        bad[i].style.display = "none";
    }
    body.appendChild(outer);
    inner.style.display = "none";
    timer.style.display = "none";
    scoreCard.style.display = "none";
    clearInterval(timerInterval);
    outer.style.backgroundColor = "black";
    body.style.backgroundColor = "black";
    heading.style.color = "white";
    info.style.color = "white";
    outer.style.textAlign = "center";
    outer.style.position = "fixed";
    outer.style.fontFamily = "Muli";
    outer.style.fontSize = "5em";
    outer.style.padding = "0";
    outer.style.marginLeft = "30vw";
    outer.style.transition = "background-color 0.2s, border 0.2s, color 0.2s";
    outer.style.paddingTop = "100px";
    outer.style.color = "white";
    outer.innerHTML = "Sorry, you lost. <br> Final Score : "+ score;
    backButton.style.backgroundColor = "rgb(0,0,0)";
}

function winningText(){
    forDialogueDrop = 2;
    outer = document.createElement('p');
    var bad = document.querySelectorAll(".badBlocks");
    for(var i  = 0; i < bad.length; i++){
        bad[i].style.display = "none";
    }
    body.appendChild(outer);
    inner.style.display = "none";
    timer.style.display = "none";
    scoreCard.style.display = "none";
    clearInterval(timerInterval);
    outer.id = "outer";
    heading.style.color = "white";
    info.style.color = "white";
    outer.style.backgroundColor = "black";
    body.style.backgroundColor = "black";
    outer.style.textAlign = "center";
    outer.style.position = "fixed";
    outer.style.fontFamily = "Muli";
    outer.style.fontSize = "5em";
    outer.style.padding = "0";
    outer.style.marginLeft = "35vw";
    outer.style.transition = "background-color 1s, border 1s, color 1s";
    outer.style.paddingTop = "100px";
    outer.style.color = "white";
    outer.innerHTML = "YOU WON!";
    backButton.style.backgroundColor = "rgb(0,0,0)";
    score = 0;
}


/**
 * @function restart - functionality for the back button.
 * /
 * @param {int} forDialogueDrop - signifies where the back button is 
 * being called from.
 * forDialogueDrop = 0 - if we click the back button on the start screen
 * forDialogueDrop = 1 - game screen
 * forDialogue Drop = 2 - winning/ losing screen  * 
 */

function restart(){
    if(forDialogueDrop == 0){
        playB.style.display = "block";
        levelDiv.style.display = "none";
        return;
    }
    else if(forDialogueDrop == 2){
        console.log("here");
        outer.style.display = "none";
        playB.style.display = "block";
        playB.style.transition = "display 1s";
    }
    else{
        inner.style.display = "none";
        timer.style.display = "none";
        scoreCard.style.display = "none";
        clearTimeout(timerInterval);       
        var bad = document.querySelectorAll(".badBlocks");
        for(var i  = 0; i < bad.length; i++){
            bad[i].style.display = "none";
        }
        dialogueBox.style.animation = "0.7s 1 dropDown";
        dialogueBox.style.display = "block";
    }

}

/**
 * @function dialogue - functionality for drop down dialogue box that comes
 * when back button is clicked
 * Options - yes or no
 */
function dialogue(answer){
    if(answer == "no"){
        dialogueBox.style.display = "none"; 
        var bad = document.querySelectorAll(".badBlocks");
        for(var i  = 0; i < bad.length; i++){
            bad[i].style.display = "block";
        }
        inner.style.display = "block";
        timer.style.display = "block";
        scoreCard.style.display = "block";        
        backButton.style.display = "block";
        displayTime();
    }
    else{
        inner.style.display = "none";
        timer.style.display = "none";
        scoreCard.style.display = "none";
        playB.style.display = "block";
        backButton.style.display = "none";
        levelDiv.style.display = "none";
        sideText.style.display = "block";
        dialogueBox.style.display = "none";
        body.style.backgroundColor = "black";
        score = 0;
        forDialogueDrop = 0;
    }
}

/**
 * @function displayTime - the function that controls the game timer
 */

function displayTime(){
    if(sec > 9){
        timer.innerHTML = min + ":" + sec;
    }
    else{
        timer.innerHTML = min + ":0" + sec;
    }
    if(min == 0 && sec == 0){
        losingText();
    }
    else if(sec == 0){
        min--;
        sec = 59;
    }
    else{
        sec--;
    }
    timerInterval = setTimeout(displayTime, 1000);
}
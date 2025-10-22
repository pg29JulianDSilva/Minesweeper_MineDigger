import GameEngine from '../libraries/gameLogic.js';

//Variables for buttons

let Ebutton = document.querySelector("#Eb");
let Mbutton = document.querySelector("#Mb");
let Hbutton = document.querySelector("#Hb");

let EGame = document.querySelector("#Egame");
let MGame = document.querySelector("#Mgame");
let HGame = document.querySelector("#Hgame");

//Placement of game
let Egame = document.querySelector('#ECave');
let Mgame = document.querySelector('#MCave');
let Hgame = document.querySelector('#HCave');


//Functions for change

let dChosen = 2;

function easygame()  {
    EGame.style.display = "block";
    MGame.style.display = "none";
    HGame.style.display = "none";
    dChosen = 0;
    //console.log("dChosen" + dChosen);
    Redo();
}
function mediumgame()  {
    EGame.style.display = "none";
    MGame.style.display = "block";
    HGame.style.display = "none";
    //console.log("dChosen" + dChosen);
    dChosen = 1;
    Redo();
}
function hardgame()  {
    EGame.style.display = "none";
    MGame.style.display = "none";
    HGame.style.display = "block";
    dChosen = 2;
    //console.log("dChosen" + dChosen);
    Redo();
}

//Button functions

Ebutton.addEventListener("click", easygame);
Mbutton.addEventListener("click", mediumgame);
Hbutton.addEventListener("click", hardgame);




//Actual Minesweeper game

//Elements

//This is a mark for the dificulties,


//User Data Records
let mTime = document.querySelectorAll('.Timer');
let mFlags = document.querySelectorAll('.Flags');

let TagName;
let popup;

//mines

let d = new GameEngine(Egame, Mgame, Hgame, dChosen);

//for the time
let lTimer = setInterval(timer, 1000);
//This one will need later the clearinterval(lTimer)
let gSeconds = 0;
let gMinutes = 0

function timer(){
    gSeconds++;
    if (gSeconds >= 60) {
        gMinutes++;
        gSeconds = 0;
    }
}

//Button difficulty functions

//Restart Game
let RestartButton = document.querySelectorAll('.ReStart');

function Redo() {
    mTime[dChosen].textContent = gMinutes+":"+gSeconds;
    d = new GameEngine(Egame, Mgame, Hgame, dChosen);
    mFlags[dChosen].textContent = 0 + d.setNumies();
    return;
};



//Just to check that all is adjusted
/*for (let i = 0; i < RestartButton.length; i++) {
    console.log(RestartButton[i]);
    console.log(RHappy[i]);
    console.log(RDead[i]);
    console.log(mTime[i]);
    console.log(mFlags[i]);
}*/

//For the score managing

let csvFile = fetch("UserData-MineSweeper(Hoja1).csv");
//console.log(csvFile.text);

//Function to start


function endgame() {
    popup = document.createElement("div");
    TagName = prompt("Congrats, you won! Please enter your name here:");
}

//Final codes

RestartButton[0].addEventListener("click", Redo);
RestartButton[1].addEventListener("click", Redo);
RestartButton[2].addEventListener("click", Redo);

Redo();
lTimer;

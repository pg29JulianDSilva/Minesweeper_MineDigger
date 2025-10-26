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

//Easy
function easygame()  {
    EGame.style.display = "block";
    MGame.style.display = "none";
    HGame.style.display = "none";
    dChosen = 0;
    Redo();
}

//Medium
function mediumgame()  {
    EGame.style.display = "none";
    MGame.style.display = "block";
    HGame.style.display = "none";
    dChosen = 1;
    Redo();
}

//Hard
function hardgame()  {
    EGame.style.display = "none";
    MGame.style.display = "none";
    HGame.style.display = "block";
    dChosen = 2;
    Redo();
}

//Button functions for change difficulty

Ebutton.addEventListener("click", easygame);
Mbutton.addEventListener("click", mediumgame);
Hbutton.addEventListener("click", hardgame);

//Actual Minesweeper game

//Elements


//User Data Records
let mTime = document.querySelectorAll('.Timer');
let mFlags = document.querySelectorAll('.Flags');

//for the user register if win
let TagName;

//For the restart button IMG
let mFace = document.querySelectorAll('.Happy');

//for the time actual board
let d = new GameEngine(Egame, Mgame, Hgame, dChosen);

//For the timer;
let lTimer = setInterval(timer, 1000);
let gSeconds = 0;
let gMinutes = 0

//Function for the time
function timer(){
    gSeconds++;
    if (gSeconds >= 60) {
        gMinutes++;
        gSeconds = 0;
    }
    mTime[dChosen].textContent = gMinutes + ":" + gSeconds;
    checkEndGame();

}

//Restart Game
let RestartButton = document.querySelectorAll('.ReStart');

//This reset the default vales and called a new board
function Redo() {
    clearInterval(lTimer);
    gSeconds = 0;
    gMinutes = 0;
    lTimer = setInterval(timer, 1000)
    d = new GameEngine(Egame, Mgame, Hgame, dChosen);
    mFlags[dChosen].textContent = 0 + d.setNumies();
    mFace[dChosen].src = "Assets/faceH.png";
    return;
};


//For the TOP inside the ranks for the final part
let pName = [];
let pTime = [];

let fTime = 0;

pName[0] = document.querySelector('#name_1');
pName[1] = document.querySelector('#name_2');
pName[2] = document.querySelector('#name_3');
pName[3] = document.querySelector('#name_4');
pName[4] = document.querySelector('#name_5');

pTime[0] = document.querySelector('#time_1');
pTime[1] = document.querySelector('#time_2');
pTime[2] = document.querySelector('#time_3');
pTime[3] = document.querySelector('#time_4');
pTime[4] = document.querySelector('#time_5');

//Function if the player win

function checkEndGame() {

    if (d.setGame() == 1) {
        clearInterval(lTimer);
        mFace[dChosen].src = "Assets/faceD.png";
    }

    if (d.setGame() == 2) {
        clearInterval(lTimer);
        fTime = (gMinutes * 60) + gSeconds;
        TagName = prompt("Congrats, you won! Please enter your name here:");

        for (let i = 0; i < 5; i++) {
            if (((Number(pTime[i].textContent.slice(0, 1)) * 60) + Number(pTime[i].textContent.slice(2, 3))) > fTime || ((Number(pTime[i].textContent.slice(0, 1)) * 60) + Number(pTime[i].textContent.slice(4, 5))) == 0) {
                if (i < 4) {
                    pTime[i + 1].textContent = pTime[i].textContent;
                    pName[i + 1].textContent = pName[i].textContent;
                }
                pTime[i].textContent = gMinutes + ":" + gSeconds;
                pName[i].textContent = TagName;
                break;
            }
        }

    }
}

//Restart buttons

RestartButton[0].addEventListener("click", Redo);
RestartButton[1].addEventListener("click", Redo);
RestartButton[2].addEventListener("click", Redo);

//Final codes to establish the begginig
Redo();
lTimer;

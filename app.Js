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

//NOTE: I'm changing something here, but is only to fix up the game difficulty

//let dChosen = 2;

/*function easygame()  {
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
}*/

//Button functions

/*Ebutton.addEventListener("click", easygame);
Mbutton.addEventListener("click", mediumgame);
Hbutton.addEventListener("click", hardgame);
*/



//Actual Minesweeper game

//Elements
let spaces = document.createElement("div");
let Dspots = document.createElement("button");

//This is a mark for the dificulties,
//let dificulty = [10, 15, 20];

/*//States
let states = 0;
let numines = Math.floor(Math.random() * ((dificulty[dChosen] * dificulty[dChosen]) - (dificulty[dChosen]))) + dificulty[dChosen];
let marked = false;
let mined = false;*/



let PGame = [Egame, Mgame, Hgame];

//User Data Records
let mTime = document.querySelectorAll('.Timer');
let mFlags = document.querySelectorAll('.Flags');
let TagName;
let popup;

//for the time
let lTimer = 0;
let sec = 0;
let min = 0;

//mines
let x = [];//It is simple, but the X is the place you DONT want to dig.
let xRepeat = 0;//This is to check that the mines do not repeat

let d = new GameEngine(Egame, Mgame, Hgame);

let dChosen = d.setDificultyNumber();

//Button difficulty functions

Ebutton.addEventListener("click", d.setDificulty(EGame, MGame, HGame));
Mbutton.addEventListener("click", d.setDificulty(MGame, EGame, HGame));
Hbutton.addEventListener("click", d.setDificulty(HGame, MGame, EGame));

function Timmmmer() {
    if (lTimer == 1000) {
        lTimer = 0;
        sec += 1;
    };

    if (sec == 60) {
        sec = 0;
        min += 1;
    };

    mTime[dChosen].textContent = min + ":" + sec;
};

//Restart Game
let RestartButton = document.querySelectorAll('.ReStart');
let RHappy = document.querySelectorAll('.Happy');
let RDead = document.querySelectorAll('.Dead');




function Redo() {
    /*x = [];
    xRepeat = 0;
    states = 0;
    numines = Math.floor(Math.random() * ((dificulty[dChosen] * dificulty[dChosen]) - (dificulty[dChosen]))) + dificulty[dChosen];
    marked = false;
    mined = false;
    //console.log(numines);
    mFlags[dChosen].textContent = "0" + numines;
    for (let i = 0; i < numines; i++) {
        do {
            xRepeat = Math.floor(Math.random() * ((dificulty[dChosen] * dificulty[dChosen]) - numines) + numines);
            if (x.includes(xRepeat)) {
                x[i] = xRepeat;
            }
            //console.log(xRepeat); For testing
            //console.log(x); For testing
        } while (x.includes(xRepeat))
        x.push(xRepeat);
    }
    lTimer = 0;
    Timmmmer();
    new minesweeper();*/


    //d.callRestart();
    mFlags[d.setDificultyNumber()].textContent = 0 + d.setNumies();
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

function start(){
    //csvFile.addEventListener('change', ScoreInput, false);
    /*mFlags[dChosen].textContent = "0" + numines;
    Timmmmer();

    for (let i = 0; i < numines; i++) {
        do {
            xRepeat = Math.floor(Math.random() * ((dificulty[dChosen] * dificulty[dChosen]) - numines) + numines);
            if (x.includes(xRepeat)) {
                x[i] = xRepeat;
            }
            //console.log(xRepeat); For testing
            //console.log(x); For testing
        } while (x.includes(xRepeat))
        x.push(xRepeat);
        console.log(x);*/
    Redo();
    //}
}

function endgame() {
    popup = document.createElement("div");
    TagName = prompt("Congrats, you won! Please enter your name here:");
}

//Final codes

RestartButton[0].addEventListener("click", Redo);
RestartButton[1].addEventListener("click", Redo);
RestartButton[2].addEventListener("click", Redo);

start();
lTimer += 1;

/*class minesweeper {
    constructor() {
        this.board = Array(((dificulty[dChosen]) * dificulty[dChosen])).fill('');
        
        this.currentPlayer = '0';

        this.isGameOver = false;

        this.cells = [];


        this.boardEl = PGame[dChosen];
        this.resetBtn = document.querySelectorAll('.ReStart');

        this.init();
    }

    init = () => {
        this.boardEl.innerHTML = '';
        this.cells = [];

        this.board.map((_, index) => {
            //const cell = document.createElement('div');
            const cell = document.createElement('img');
            cell.classList.add('cell');
            cell.dataset.index = index; 

            //const cFlag = document.createElement('img');
            //cFlag.src = "Flag.png";
            //cFlag.classList.add('iFlag');
             //cFlag.dataset.index = index;
            //this.iCell = document.querySelectorAll(".cell")
            //this.iCell.appendChild(cFlag);


            cell.addEventListener('mousedown', () => this.clickHandle(index)); ///
            this.boardEl.appendChild(cell);
            this.cells.push(cell);
        });

    };

    clickHandle = (index) => {
        //const mButton = clickHandle.button;

        if (event.button == 2) {
            this.cells[index].src = "Assets/Flag.png";
            this.cells[index].style.width = "100%";
            this.cells[index].style.height = "75%";
            
        }
        console.log(event.button);
    }

    handleFlag = (index) => {
        if (this.board[index] || this.isGameOver) return;
    }

    handleMove = (index) => {
        if (this.board[index] || this.isGameOver) return;

        this.board[index] = this.currentPlayer;
        if (board[x] == this.currentPlayer) {
            board[x].style.backgroundImage = "url(D:\Projectos VFS\HTML\A3\WebPageConstruction\Assets\Mine(S).png)";

        }
        this.cells[index].textContent = this.currentPlayer;

       if (!this.checkMine()) {
            this.stateEl.textContent = `Player ${this.currentPlayer} wins`;
            this.isGameOver = true;
        } else if (this.board.every(cell => cell)) {
            this.stateEl.textContent = "It's a draw!";
            this.isGameOver = true;
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.stateEl.textContent = `Player ${this.currentPlayer}'s turn`
        };
    };

    checkMine = () => {

        for (let i = 0; i < numines; i++) {
            do {
                xRepeat = Math.floor(Math.random() * ((dificulty[dChosen] * dificulty[dChosen]) - numines) + numines);
                if (x.includes(xRepeat)) {
                    x[i] = xRepeat;
                }
                //console.log(xRepeat); For testing
                //console.log(x); For testing
            } while (x.includes(xRepeat))
            x.push(xRepeat);
            console.log(x);
        }


        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows 
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  //Columns
            [0, 4, 8], [2, 4, 6] //Diagonals :)
        ]

        return winCombos.some(([a, b, c]) => {
            return this.board[a] &&
                this.board[a] === this.board[b] &&
                this.board[a] === this.board[c];
        });
    };
}

new minesweeper();*/
class minesweeper {
    constructor(Egame, Mgame, Hgame) {

        this.dChosen = 2;
        this.dificulty = [10, 15, 20];

        this.pGame = [Egame, Mgame, Hgame];

        this.board = Array(((this.dificulty[this.dChosen]) * this.dificulty[this.dChosen])).fill('');

        this.currentPlayer = '0';

        this.isGameOver = false;

        this.cells = [];

        //restart
        this.x = [];
        this.xRepeat = 0;
        this.states = 0;
        this.dificulty = [10, 15, 20];
        this.lTimer = 0;
        this.numies = 0;
        this.fElements = this.x.length;

        this.boardEl = this.pGame[this.dChosen];

        this.init();
    }

    reStart(dChosen) {

        this.numines = Math.floor(Math.random() * ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - (this.dificulty[this.dChosen]))) + this.dificulty[this.dChosen];
        console.log(this.numines);
        //mFlags[dChosen].textContent = "0" + this.numines;
        for (let i = 0; i < this.numines; i++) {
            do {
                this.xRepeat = Math.floor(Math.random() * ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - this.numines) + this.numines);
                if (this.x.includes(this.xRepeat)) {
                    this.x[i] = this.xRepeat;
                }
                //console.log(xRepeat); For testing
                //console.log(x); For testing
            } while (this.x.includes(this.xRepeat))
            this.x.push(this.xRepeat);
        }
        this.lTimer = 0;
        //Timmmmer();
    }

    rFlags() {
        return this.x;
    }

    rNumies() {
        return this.numines;
    }

    rDificulty() {
        return ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]));
    }

    sDificulty(dNumber){
        this.dChosen = dNumber;
    }

    init = () => {
        this.boardEl.innerHTML = '';
        this.cells = [];

        this.board.map((_, index) => {
            //const cell = document.createElement('div');
            const cell = document.createElement('img');
            cell.classList.add('cell');
            cell.dataset.index = index;
            cell.dataset.marked = 0; //This is a boolean dataset, however, I had trouble with the  boolean info, so i changed it into a int
            cell.dataset.digged = 0;//This one also
            cell.src = "Assets/faceH.png";

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

    mineDigger = (index) => {
        //if()
    }


    //Need to fix the cycle
    clickHandle = (index) => {
        //const mButton = clickHandle.button;
        if (this.isGameOver) return;
        this.isMarked = this.cells[index].dataset.marked;
        if (event.button == 2 && (this.isMarked == 0)) {
            this.cells[index].src = "Assets/Flag.png";
            this.cells[index].dataset.marked = 1;

            if (x.includes(index)) {
                this.fElements--;
            }

        }else if(event.button == 2) {
            this.cells[index].src = "Assets/faceH.png";
            this.cells[index].dataset.marked = 0;
        }

        if (event.button == 0) {
            if (x.includes(index)) {
                this.isGameOver = true;
            } else {
                this.cells[index].src = "Assets/faceD.png";
                this.mineDigger(index);
            }
        }
        console.log(this.isMarked);
    }

    /*handleFlag = (index) => {
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
    };*/

    returnFlags() {
        return this.fElements;
    }

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

export default minesweeper;
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
        this.lTimer = 0;
        this.fElements = 0;
        this.counter = 0;

        this.boardEl = this.pGame[this.dChosen];

        this.init();
    }

    reStart(dChosen) {
        this.init();
        this.lTimer = 0;
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

            cell.dataset.mine = 0;//Other boolean to knwo which spots have mines
            cell.dataset.mineNumber = 0;//Number of mines near



            cell.src = "Assets/empty.png";

            if ((Math.floor(Math.random() * 2) == 0)){
                cell.dataset.mine = 1;//Other boolean to knwo which spots have mines
                cell.dataset.mineNumber = 0;//Other boolean to knwo which spots have mines
                this.fElements++;
            };


            cell.addEventListener('mousedown', () => this.clickHandle(index)); ///
            this.boardEl.appendChild(cell);
            this.cells.push(cell);
        });

    };

    mineDigger = (index) => {
        if (this.cells[index].dataset.mine == 1) { return; }
        this.actualIndex = index;
        this.cells[index].dataset.digged = 1;
        if (this.cells[index - 1].dataset.mine == 1 || this.cells[index - 1].dataset.digged == 1) {
            this.cells[index].dataset.mineNumber++;
        }else {
            //this.mineDigger(this.actualIndex - 1);
        }

        if (this.cells[index + 1].dataset.mine == 1 || this.cells[index + 1].dataset.digged == 1) {
            this.cells[index].dataset.mineNumber++;
        } else {
            //this.mineDigger(this.actualIndex + 1);
        }

        if (this.cells[this.actualIndex - this.dificulty[this.dChosen]].dataset.mine == 1 || this.cells[this.actualIndex - this.dificulty[this.dChosen]].dataset.digged == 1) {
            this.cells[index].dataset.mineNumber++;
        } else {
            //this.mineDigger(this.actualIndex - this.dificulty[this.dChosen]);
        }

        if (this.cells[this.actualIndex - this.dificulty[this.dChosen]].dataset.mine == 1 || this.cells[this.actualIndex - this.dificulty[this.dChosen]].dataset.digged == 1) {
            this.cells[index].dataset.mineNumber++;
        } else {
            //this.mineDigger(this.actualIndex + this.dificulty[this.dChosen]);
        }
        
        if (this.cells[index - (this.dificulty[this.dChosen] - 1)].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } else {
            //this.mineDigger(this.actualIndex - this.dificulty[this.dChosen] - 1);
        }

        if (this.cells[index + (this.dificulty[this.dChosen] - 1)].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } else {
            //this.mineDigger(this.actualIndex + this.dificulty[this.dChosen] - 1);
        }

        if (this.cells[index - (this.dificulty[this.dChosen] + 1)].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } else {
            //this.mineDigger(this.actualIndex - this.dificulty[this.dChosen] + 1);
        }

        if (this.cells[index + (this.dificulty[this.dChosen] + 1)].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } else {
            //this.mineDigger(this.actualIndex + this.dificulty[this.dChosen] + 1);
        }

        //switch ((Math.floor(Math.random() * 8))

        //console.log(this.cells[index].dataset.mineNumber);
        //console.log(index);
        this.image(index);
    }

    image = (index) => {
        
        if (this.cells[index].dataset.mineNumber == 0) {
            this.cells[index].src = "Assets/Digged.png";
            console.log(this.cells[index].dataset.mineNumber);
        }
        if (this.cells[index].dataset.mineNumber == 1) {
            this.cells[index].src = "Assets/1.png";
        }
        if (this.cells[index].dataset.mineNumber == 2) {
            this.cells[index].src = "Assets/2.png";
        }
        if (this.cells[index].dataset.mineNumber == 3) {
            this.cells[index].src = "Assets/3.png";
        }
        if (this.cells[index].dataset.mineNumber == 4) {
            this.cells[index].src = "Assets/4.png";
        }
        if (this.cells[index].dataset.mineNumber == 5) {
            this.cells[index].src = "Assets/5.png";
        }
        if (this.cells[index].dataset.mineNumber == 6) {
            this.cells[index].src = "Assets/6.png";
        }
        if (this.cells[index].dataset.mineNumber == 7) {
            this.cells[index].src = "Assets/7.png";
        }
        if (this.cells[index].dataset.mineNumber == 8) {
            this.cells[index].src = "Assets/8.png";
        }
            
    }


    //Need to fix the cycle
    clickHandle = (index) => {
        //const mButton = clickHandle.button;
        if (this.isGameOver || this.cells[index].dataset.digged == 1) return;
        this.isMarked = this.cells[index].dataset.marked;
        if (event.button == 2 && (this.isMarked == 0)) {
            this.cells[index].src = "Assets/Flag.png";
            this.cells[index].dataset.marked = 1;

            if (this.cells[index].dataset.mine == 1) {

                this.fElements--;
            }

        }else if(event.button == 2) {
            this.cells[index].src = "Assets/empty.png";
            this.cells[index].dataset.marked = 0;
        }

        if (event.button == 0) {
            if (this.cells[index].dataset.mine == 1) {
                this.cells[index].src = "Assets/Mine(S).png";
                this.isGameOver = true;
            } else {
                this.mineDigger(index)
                this.image(index);
                
            }
        }
        //console.log(this.isMarked);
    }

    returnFlags() {
        return this.fElements;
    }
}

export default minesweeper;
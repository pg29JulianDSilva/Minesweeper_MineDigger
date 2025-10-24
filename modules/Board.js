class minesweeper {
    constructor(Egame, Mgame, Hgame, dChosen) {

        this.dChosen = dChosen;
        this.dificulty = [10, 15, 20];

        this.pGame = [Egame, Mgame, Hgame];

        this.board = Array(((this.dificulty[this.dChosen]) * this.dificulty[this.dChosen])).fill('');

        this.isGameOver = false;

        this.cells = [];

        //restart
        this.fElements = 0;

        this.dElements = 0;

        this.boardEl = this.pGame[this.dChosen];

        //Timmer

        this.init();

        this.fMine = true;

        this.RHappy = document.querySelectorAll('.Happy');
        this.RDead = document.querySelectorAll('.Dead');
    }

    reStart() {
        this.init();
    }

    rNumies() {
        return this.fElements;
    }

    init = () => {
        this.boardEl.innerHTML = '';
        this.cells = [];

        this.board.map((_, index) => {
            const cell = document.createElement('img');
            cell.classList.add('cell');
            cell.dataset.index = index;
            cell.dataset.marked = 0; //This is a boolean dataset, however, I had trouble with the  boolean info, so i changed it into a int
            cell.dataset.digged = 0;//This one also

            cell.dataset.mine = 0;//Other boolean to knwo which spots have mines
            cell.dataset.mineNumber = 0;//Number of mines near

            cell.src = "Assets/empty.png";

            if ((Math.floor(Math.random() * 5) == 0)) {
                cell.dataset.mine = 1;//Other boolean to knwo which spots have mines
                cell.dataset.mineNumber = 0;//Other boolean to knwo which spots have mines
                this.fElements++;
            } else {this.dElements++};


            cell.addEventListener('mousedown', () => this.clickHandle(index)); //
            this.boardEl.appendChild(cell);
            this.cells.push(cell);
        });

    };

    mineDigger = (index) => {
        if (this.cells[index].dataset.mine == 1 || this.cells[index].dataset.digged == 1 || this.cells[index].dataset.marked == 1) { return; }
        this.cells[index].dataset.digged = 1;
        if (index - 1 >= 0 && this.bCalcule != 0 && this.cells[index - 1].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        }

        if (index < ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - 1) && index % 10 != 9 && this.cells[index + 1].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        }

        if (index > this.dificulty[this.dChosen] && this.cells[index - this.dificulty[this.dChosen]].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } 

        if (index < ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - this.dificulty[this.dChosen]) && this.cells[index + this.dificulty[this.dChosen]].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } 
        
        if (index > (this.dificulty[this.dChosen] - 1) && index % 10 != 9 && this.cells[index - (this.dificulty[this.dChosen] - 1)].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } 

        if (index < ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - (this.dificulty[this.dChosen] - 1)) && this.bCalcule != 0 && this.cells[index + (this.dificulty[this.dChosen] - 1)].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } 

        if (index > (this.dificulty[this.dChosen] + 1) && this.bCalcule != 0 && this.cells[index - (this.dificulty[this.dChosen] + 1)].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } 

        if (index < ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - (this.dificulty[this.dChosen] + 1)) && index % 10 != 9 && this.cells[index + (this.dificulty[this.dChosen] + 1)].dataset.mine == 1) {
            this.cells[index].dataset.mineNumber++;
        } 
        this.image(index);
    }

    image = (index) => {
        if (this.cells[index].dataset.mine == 1) { return; }
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
        this.mineStep = false;
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

        if (event.button == 0 && this.cells[index].dataset.marked == 0) {
            if (this.cells[index].dataset.mine == 1 && this.fMine == false) {
                this.cells[index].src = "Assets/Mine(S).png";
                //this.RHappy[this.dificulty[this.dChosen]].style.display = "none";
                //this.RDead[this.dificulty[this.dChosen]].style.display = "block";
                this.isGameOver = true;
                this.mineStep = true;
            } else {
                if (this.fMine == true) {
                    this.cells[index].dataset.mine = 0;
                    this.fElements--;
                    this.fMine = false;
                }
                this.bCalcule = (index / this.dificulty[this.dChosen]) * 10;
                this.bCalculeE = ((index + 1) / this.dificulty[this.dChosen]) * 10;
                this.mineDigger(index);

                //I know this can be done with a loop. But the loops are crashing the html, whihc is why I cannot use it.
                if (this.bCalcule % 10 != 0) {
                    if (index - 1 >= 0) { this.mineDigger(index - 1); }
                    if (index > this.dificulty[this.dChosen] + 1) { this.mineDigger(index - (this.dificulty[this.dChosen] + 1)); }
                    if (index < ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - (this.dificulty[this.dChosen] - 1))) { this.mineDigger(index + (this.dificulty[this.dChosen] - 1)); }
                }
                if (this.bCalculeE % 10 != 0) {
                    if (index < (this.dificulty[this.dChosen] * this.dificulty[this.dChosen])) { this.mineDigger(index + 1); }
                    if (index > this.dificulty[this.dChosen] - 1) { this.mineDigger(index - (this.dificulty[this.dChosen] - 1)); }
                    if (index < ((this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - (this.dificulty[this.dChosen] + 1))) { this.mineDigger(index + (this.dificulty[this.dChosen] + 1)); }
                }
                if (index > this.dificulty[this.dChosen]) { this.mineDigger(index - this.dificulty[this.dChosen]); }
                if (index < (this.dificulty[this.dChosen] * this.dificulty[this.dChosen]) - this.dificulty[this.dChosen]) { this.mineDigger(index + this.dificulty[this.dChosen]); }
                
                this.dElements--;
                this.checkGame(this.mineStep);
            }
        }
    }

    checkGame = (index) => {

        if (this.mineStep) {
            return 1; //In case of lost
        }

        if (this.dElements <= 0) {
            this.isGameOver = true;
            return 2; //In case of win
        }
        return 0;
    }

}

export default minesweeper;
import minesweeper from "../modules/Board.js";

class GameEngine {

    constructor(Egame, Mgame, Hgame, dChosen) {
        this.board = new minesweeper(Egame, Mgame, Hgame, dChosen);
        
    }

    //The called of number of flags

    setNumies() {
        return this.board.rNumies();
    }

    //This one return the value form the gamecheck inside the minesweeper class

    setGame() {
        return this.board.checkGame();
    }
}

export default GameEngine;
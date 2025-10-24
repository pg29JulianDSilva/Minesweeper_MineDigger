import Difficult from "../modules/dificulty.js";
import minesweeper from "../modules/Board.js";

class GameEngine {

    constructor(Egame, Mgame, Hgame) {
        this.difficulty = new Difficult();
        this.dNumber = this.difficulty.setNumber();
        this.board = new minesweeper(Egame, Mgame, Hgame);
        
    }

    setDificulty(gSelected, otherGame1, otherGame2,) {
        return this.difficulty.dificulty(gSelected, otherGame1, otherGame2, this.board.reStart(this.difficulty.setNumber()));;
    }
    setDificultyNumber() {
        return this.dNumber;
    }

    setNumies() {
        return this.board.rNumies();
    }

    callRestart() {
        return this.board.reStart(this.dNumber);
    }

    setMines() {
        return this.board.rFlags();
    }
}

export default GameEngine;
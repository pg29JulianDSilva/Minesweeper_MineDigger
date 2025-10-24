import minesweeper from "../modules/Board.js";

class GameEngine {

    constructor(Egame, Mgame, Hgame, dChosen) {
        this.board = new minesweeper(Egame, Mgame, Hgame, dChosen);
        
    }

    setNumies() {
        return this.board.rNumies();
    }

    setGame() {
        return this.board.checkGame();
    }
}

export default GameEngine;
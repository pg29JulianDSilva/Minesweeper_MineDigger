import minesweeper from "../modules/Board.js";

class GameEngine {

    constructor(Egame, Mgame, Hgame, dChosen) {
        this.board = new minesweeper(Egame, Mgame, Hgame, dChosen);
        
    }

    setNumies() {
        return this.board.rNumies();
    }
}

export default GameEngine;
class Difficult {
    constructor() {
        this.dNumber = 2;
    }

    dificulty(gSelected, otherGame1, otherGame2, redo) {
        gSelected.style.display = "block";
        otherGame1.style.display = "none";
        otherGame2.style.display = "none";
        if (gSelected.id == "Egame") {
            this.dNumber = 0;
            console.log("dChosen" + this.dNumber);
        } else if (gSelected.id == "Mgame") {
            this.dNumber = 1;
            console.log("dChosen" + this.dNumber);
        } else if (gSelected.id = "Hgame") {
            this.dNumber = 2;
            console.log("dChosen" + this.dNumber);
        }
        redo;
    }

    setNumber() {
        return this.dNumber;
    }

}

export default Difficult;
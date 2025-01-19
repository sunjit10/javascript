class Player {

    #startYear = 2018;
    canBeTraded = false;
    
    constructor() {
	this.playsSport = "Soccer";
    }

    sport() {
	return this.playsSport;
    }
}

let player1 = new Player();
console.log(player1.sport());

class Player {
    // #<fieldName> makes it a private field
    // startYear is a private variable, not accessible from outside
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
player1.canBeTraded = true;

// Note: this is not working - maybe I am on older version of JS?
//player1.#startYear = 2020;

console.log(player1);

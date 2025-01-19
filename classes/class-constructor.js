class Player {

    // CANNOT have more than one constructor in a class
    /*
    constructor() {
	this.playsSport = "Soccer";
    }
    */

    playerAge = 30;

    // No need to define playsSport prior to below
    constructor(playerSport) {
	this.playsSport = playerSport;
    }

    sport() {
	return this.playsSport;
    }
}

let player1 = new Player();
console.log(player1.sport());
console.log(player1.playerAge);

let player2 = new Player("Hockey");
console.log(player2.sport());

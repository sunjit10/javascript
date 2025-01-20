class Player {

    static isDrafted = false;
    
    constructor(theirSport, fname, lname, age) {
	this.playsSport = theirSport;
	this.fname = fname;
	this.lname = lname;
	this.age = age;
    }

    // get fullName() allows you to call <object>.fullName
    get fullName() {
	return `${this.fname}  ${this.lname}`;
    }
    
    set playerAge(age) {
        if (age > 20) {
	    this.age = age;
	}
    }
}

let player1 = new Player("Football", "Peyton", "Manning", 26);

Player.isDrafted = true;

// player1 will not have isDrafted property since it belongs to class Player
console.log(player1);
console.log("----------------------------------");

// Player class will have isDrafted property
console.log(Player);

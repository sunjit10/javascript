class Player {
    
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

    sport1() {
	return this.playsSport;
    }

    get sport2() {
	return this.playsSport;
    }

    set sport2(newSport) {
	this.playsSport = newSport;
    }

    set playerAge(age) {
        if (age > 20) {
	    this.age = age;
	}
    }
}

let player1 = new Player("Basketball", "Michael", "Johson", 23);
console.log(player1.fullName);

// without getter, you call it as a method
console.log(player1.sport1());
// With getter, you call sport2 as if it was a field
console.log(player1.sport2);

// With setter, you can call as if it was a method
player1.sport2 = "Baseball";

player1.playerAge = 30;

player1.playerAge = 5; // This will not do anything because of if logic
console.log(player1);

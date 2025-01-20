class Person {

    constructor(fname, lname) {
	this.fname = fname;
	this.lname = lname;
    }

    get fullName() {
	return `${this.fname} ${this.lname}`;
    }

}


class Employee extends Person {

    isEmployed = true;
    
    constructor(fname, lname, empid, employer) {
	super(fname, lname);
	this.empid = empid;
	this.employer = employer;
    }

}

let person1 = new Person("Mike", "Smith");
let employee1 = new Employee("John", "Adams", 234, "ABC");

console.log(employee1);
console.log(employee1.fullName);

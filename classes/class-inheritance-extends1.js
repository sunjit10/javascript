class Person {
    pName = "Mike Smith";

    get myName() {
	// return pName will not work, need to do return this.pName
	return this.pName;
    }
}

class Employee extends Person {
    empId = 10;
}

let employee1 = new Employee();
console.log(employee1.pName);
console.log(employee1.myName);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello ${this.name}`;
  }

}

const person1 = new Person('Daniel', 30);
console.log(person1.greet());

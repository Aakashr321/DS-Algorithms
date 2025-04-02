/* Data Structures */

/* 
=>Data structures are collections of values,
the relationships among them, and the functions
or operations that can be applied to the data.
*/

/* ES2015 syntax
What is a class?
A blueprint for creating objects  with pre-defined
properties and methods.
*/

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user1 = new Student("Colt", "Steel");
console.log("user1", user1);

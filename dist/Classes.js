"use strict";
class Student {
    constructor(fName, lName, courses) {
        this.firstName = fName;
        this.lastName = lName;
        this.courses = courses;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student2 extends Student {
}
// class Student {
//   constructor(public firstName: string, public lastName: string) {}
// }
const student1 = new Student("Wasim", "Fatair", ["Angular"]);
console.log(student1);
// console.log(student1.getFullName());

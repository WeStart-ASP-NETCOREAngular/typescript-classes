interface IStudent {
  getFullName(): string;
}

class Student implements IStudent {
  private firstName: string;
  private lastName: string;
  private courses: string[];
  constructor(fName: string, lName: string, courses: string[]) {
    this.firstName = fName;
    this.lastName = lName;
    this.courses = courses;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student2 extends Student {}

// class Student {
//   constructor(public firstName: string, public lastName: string) {}
// }

const student1 = new Student("Wasim", "Fatair", ["Angular"]);
console.log(student1);
// console.log(student1.getFullName());

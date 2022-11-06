interface Person {
  name: string;
  age: number;
  getFullname(): void;
}

const user: Person = {
  name: "Wasim",
  age: 31,
  getFullname() {},
};

console.log(user);

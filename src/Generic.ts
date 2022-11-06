interface IUserTest {
  firstName: string;
  lastName: string;
}

function addId<Type extends IUserTest>(obj: Type) {
  const randomId = Math.random().toString();
  return {
    randomId,
    ...obj,
  };
}

const student: IUserTest = {
  firstName: "Wasim",
  lastName: "Fatair",
};

console.log(addId<IUserTest>(student));

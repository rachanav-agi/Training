interface IStudent {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var Student: IStudent = {
  firstName: "Rachana",
  lastName: "V",
  sayHi: (): string => {
    return "C R";
  }
};

console.log("Student Object ");
console.log(Student.firstName);
console.log(Student.lastName);
console.log(Student.sayHi());

// class User {
//   #lastName;
//   constructor(firstName, lastName, age, isMale = true) {
//     if (typeof firstName !== "string") {
//       throw new TypeError("first name must be string");
//     }
//     if (typeof lastName !== "string") {
//       throw new TypeError("first name must be string");
//     }
//     if (typeof age !== "number") {
//       throw new TypeError("age must be number");
//     }
//     if (age < 0 || age > 90) {
//       throw new RangeError("error: age<0 or age>90");
//     }
//     if (typeof isMale !== "boolean") {
//       throw new TypeError("first name must be boolean");
//     }
//     this.firstName = firstName;
//     this.#lastName = lastName;
//     this.age = age;
//     this.isMale = isMale;
//   }
//   get getFullName() {
//     return `${this.firstName} ${this.#lastName}`;
//   }
//   set getFullName(value) {
//     if (typeof value !== "string") {
//       throw new TypeError("full name must be string!");
//     }
//     if (value.includes(" ") === false) {
//       throw new RangeError("full name must have space");
//     }
//     const arrFullName = value.split(" ").filter((word) => word);
//     if (arrFullName.length !== 2) {
//       throw new RangeError("full name must have two words");
//     }
//     this.#firstName = arrFullName[0];
//     this._lastName = arrFullName[1];
//   }
//   toString() {
//     return this.firstName;
//   }
//   static amount = 0;
//   static createTestUser(){
//     return new User("Test", "Testtest", 18);
//   }
// }

// const user2 = new User("Tom", "Rot", 59);
// const user3 = new User("Neo", "Neo", 28);

// try {
//   const user3 = new User("Tim", "Qwery", 23);
//   user3.fullName = "  Fred Dred  ";
//   console.log(user3.fullName);
//   console.log(user3.firstName);
//   console.log(user3);
// } catch (error) {
//   console.log(error);
// }
// console.log("important info");

// class Worker {
//   constructor(lastName, dailyWage, daysWorked = 0, isMale = true) {
//     this.lastName = lastName;
//     this.dailyWage = dailyWage;
//     this.daysWorked = daysWorked;
//     this.isMale = isMale;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   set lastName(value) {
//     if (typeof value !== "string") {
//       throw new TypeError("first name must be string");
//     }
//     this._lastName = value;
//   }
//   get dailyWage() {
//     return this._dailyWage;
//   }
//   set dailyWage(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("dailyWage must be number");
//     }
//     if (value < 0) {
//       throw new RangeError("error: value < 0");
//     }
//     this._dailyWage = value;
//   }
//   get daysWorked() {
//     return this._daysWorked;
//   }
//   set daysWorked(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("dailyWage must be number");
//     }
//     if (value < 0 || value > 31) {
//       throw new RangeError("error: value < 0 or value > 31");
//       this._daysWorked = value;
//     }
//   }
//   get isMale() {
//     return this.isMale;
//   }
//   set isMale(value) {
//     if (typeof value !== "boolean") {
//       throw new TypeError("first name must be boolean");
//     }
//     this.isMale = value;
//   }
//   getDailyWage() {
//     return this.dailyWage * this.daysWorked;
//   }
// }

// const worker1 = new Worker("Ivanov", 500, 20);
// console.log(worker1.getDailyWage()); //10000

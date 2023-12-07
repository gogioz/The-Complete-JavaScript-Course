'use strict';

// Constructor Functions and the new Operator
// class Person {
//   constructor(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // NEVER DO THIS
//     // this.calcAge = function () {
//     //   console.log(2023 - this.birthYear);
//     // };
//   }
// }

// const hager = new Person('Hager', 2000);

// Person.hey = function () {
//   console.log('Hey there ');
//   console.log(this);
// };
// Person.hey();
// // hager.hey();

// console.log(hager);

// const clever = new Person('Clever', 2000);
// const shadwa = new Person('Shadwa', 2001);

// console.log(clever);
// console.log(shadwa);
// console.log(hager instanceof Person);
////////////////////////////////////////////////////////////

// // Prototyps
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// hager.calcAge();
// shadwa.calcAge();

// console.log(hager.__proto__);
// console.log(hager.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(hager));
// console.log(Person.prototype.isPrototypeOf(clever));
// console.log(Person.prototype.isPrototypeOf(shadwa));

// Person.prototype.species = 'Homo Sapiens';
// console.log(hager.species);

// console.log(hager.hasOwnProperty('firstName'));
// console.log(hager.hasOwnProperty('species'));

// // Person
// console.log(hager.__proto__);
// // Object
// console.log(hager.__proto__.__proto__);
// // Null
// console.log(hager.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(x => x + 1);
/////////////////////////////////////////////////

// CODING CHALLANGE 1

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.brake();
// car2.accelerate();
// car2.brake();
///////////////////////////////////////////////////////

// ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey this is ${this.fullName}`);
//   }
//   get age() {
//     return 2023 - this.birthYear;
//   }
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a vaild name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('hey there');
//     console.log(this);
//   }
// }
// PersonCl.hey();

// const hager = new PersonCl('hager fathi', 2000);
// console.log(hager);
// console.log(hager.age);
// // hager.calcAge();

// console.log(hager.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey this is ${this.fullName}`);
// };

// hager.greet();

// 1. classes are not hoisted
// 2. classes are first class citizes can pass to function and reuturn it form function
// 3. classes are executed in strict mode
//////////////////////////////////////////////////

// Setters and Getters

// const account = {
//   owner: 'hager',
//   movements: [200, 300, 4400],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// // console.log(account)

// account.latest = 50;
// console.log(account.movements);
// console.log(account.latest);
//////////////////////////////////////////

// Object.create()

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const donia = Object.create(PersonProto);
// console.log(donia);

// donia.name = 'Donia';
// donia.birthYear = 1999;
// donia.calcAge();

// console.log(donia.__proto__ == PersonProto);

// const amira = Object.create(PersonProto);
// console.log(amira);
// amira.init('Amira', 1999);
// amira.calcAge();
////////////////////////////////////////////////

// CODING CHALLANGE 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car1 = new CarCl('Ford', 120);

// console.log(car1.speedUS);
// car1.accelerate();
// car1.brake();

// car1.speedUS = 50;
// console.log(car1);
/////////////////////////////////////////////////////////////

// Inheritance between "classes": constructor function

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const doaa = new Student('doaa', 1989, 'English Course');
// doaa.introduce();
// doaa.calcAge();

// console.log(doaa.__proto__);
// console.log(doaa.__proto__.__proto__);

// console.log(doaa instanceof Student);
// console.log(doaa instanceof Person);
// console.log(doaa instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
///////////////////////////////////////////////////////////

// CODING CHALLENGE 3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Linking prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
///////////////////////////////////////////////////////

// Inheritance between classes ES6 classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey this is ${this.fullName}`);
//   }
//   get age() {
//     return 2023 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a vaild name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('hey there');
//     console.log(this);
//   }
// }

// const hager = new PersonCl('hager fathi', 2000);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey this is ${this.fullName}`);
// };

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2023 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2023 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const nada = new StudentCl('Nada Mohamed', 1998, 'Journalism');
// nada.introduce();
// nada.calcAge();
/////////////////////////////////////////////////////

// Inheritance between classes Object.create()

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const amira = Object.create(PersonProto);

// const StudenProto = Object.create(PersonProto);
// StudenProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudenProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const sarah = Object.create(StudenProto);
// sarah.init('Sarah', 2000, 'JavaScript');
// sarah.introduce();
// sarah.calcAge();
///////////////////////////////////////////////////////

// Another class example

// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) Private fields (instances)
//   #movments = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // protected property
//     // this._movments = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods === Public interface
//   getMovements() {
//     return this.#movments;
//   }
//   deposit(val) {
//     this.#movments.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   _approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved');
//       return this;
//     }
//   }
//   static helper() {
//     console.log('hi from static');
//   }

//   // 4) Private methods
//   // does not work yet
//   // #approveLoan(val) {
//   //   return true;
//   // }
// }

// const acc1 = new Account('Hager', 'EUR', 3812, []);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);
/////////////////////////////////////////////////////////////////

// Encapsulation: Private Class Fields and Methods
// Public fields

// Private fields
// console.log(acc1.#movements);
// console.log(acc1.#pin);

// Public methods

// Private methods
// (there is also the static version)
// console.log(acc1.#approveLoan(100));
// Account.helper();
////////////////////////////////////////////////////////////////

// Chaning methods
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());
///////////////////////////////////////////////////////////////

// CODING CHALLANGE 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);

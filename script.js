// Passing functions inside of functions

// I created this to calculate the down payment amount that will be owed based on the cost of the home

const downPayment = (homeValue) => {
  const rate = 0.2;
  const amount = homeValue * rate;
  return amount;
};

const investments = (home1, home2, home3) => {
  const payment1 = downPayment(home1);
  const payment2 = downPayment(home2);
  const payment3 = downPayment(home3);
  const totalDue = payment1 + payment2 + payment3;
  return `The down payment for home 1 is ${payment1}. The down payment for home 2 is ${payment2}. The down payment for home 3 is ${payment3}. So, you owe a total of ${totalDue} in down payments.`;
};

const totalAmount = investments(100000, 120000, 300000);
console.log(totalAmount);

/*

the out put is:

The down payment for home 1 is 20000. The down payment for home 2 is 24000. The down payment for home 3 is 60000. So, you owe a total of 104000 in down payments.

*/

// Objects practice

let car = {
  make: "Jeep",
  model: {
    name: "hellcat",
    year: 2022,
    hp: 900,
    gas: {
      standard: false,
      premium: true,
      diesel: false,
    },
  },
  used: false,
  features: ["subwoofers", "22 in wheels", "sunroof"],
  makeNoise() {
    console.log("Vroom");
  },
};

console.log(car.model.gas.premium);

let book = {
  Title: "2022 Hell Cat Owners Manual",
  Author: {
    name: "Dodge",
    published: 2022,
  },
};

console.log(book.Author.name);
console.log(book.Title);

book.Title = "2022 Jeep SRT Hell Cat Owners Manual";
console.log(book.Title);

// most common array methods

const a = [1, 2, 3, 4, 5];

// loops through each element and applies the function to each array element
a.forEach((number) => {
  console.log(number + 1);
});

// loops through each element and returns a new array for the array
const newA = a.map((number) => {
  return number * 2;
});
console.log(newA);

// filter down to only select values
const arr = a.filter((number) => {
  return number <= 4;
});
console.log(arr);

// finds a select value. stops once the value is found.
const findMe = a.find((number) => {
  return number > 2;
});
console.log(findMe);

// loops through elements in the array looking for a single match with the function
const doSome = a.some((number) => {
  return number > 4;
});
console.log(doSome);

// loops through all the elements in the array looking for all elements to match with the function
const doesEvery = a.every((number) => {
  return number > 4;
});
console.log(doesEvery);

// loops through all the elements in the array looking for the specific element and if its included
const isIncluded = a.includes(2);
console.log(isIncluded);

// New and This

function createUser(name, age) {
  return { name: name, age: age, human: true };
}

let user = createUser("Jerry", 30);
console.log(user);

// When creating an object with the new keyword it is called a constructor where you pass in information
// const date = new Date();
// console.log(date.getMonth());

// When creating a contructor, which is a new object, it is best practice to capitalize the name of the constructor. When using a constructor you get access to the this keyword which references the current object youre trying to create. when a constructor is called behind the scenes is creates "this = {}" which a variable called this and sets it equal to a new empty object. At the end of your function it returns the new object for you

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.human = true;
// }

// object > new > gain access to "this" > new object created to replace old one
user = createUser("Jerry Jr", 0.5);
console.log(user);

// Classes

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  //Claases make it easier to add functions
  printName() {
    console.log(this.name);
  }
}

user = new User("Marissa", 27);
console.log(user);
user.printName();

/* 
ASYNC vs DEFER

standard - parsing through html > reaches script tag > downloads script tag > executes script tag > continues parsing out html

ASYNC - parsing through html > reaches script tag > downloads script tag in the background while still parsing through HTML > script downloaded > parsing stops > executes script tag > continues parsing out html (downloads script in the background asynchronously)

DEFER - parsing through html > reaches script tag > downloads script tag in the background while still parsing through HTML > script downloaded > html parsing complete > executes script tag (All execution is DEFERED until the end of the page)

*/

// query selector

const divClass = document.querySelectorAll(".div-class-one");
console.log(dataTest);
divClass.forEach((div) => (div.style.color = "red"));
console.log(divClass);

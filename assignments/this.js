/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding :When in the global scope, the value of “this” will be the window/console Object...or "CodePen" :-)

* 2. Implicit Binding :function is called by a preceding dot, the object before that dot is 'this'.

* 3. Explicit binding : Whenever JavaScript’s call or apply method is used, this is explicitly defined.

* 4. New binding: when you create a new object using the constructor function. 
*
* write out a code example of each explanation above
*/

// Principle 1

function sayHi(name) {
  console.log(`Hello, ${name}`);
  // return name;
}
sayHi("Jazz");

// Principle 2

const husband = {
  name: 'Bennie',
  age: 29,
  sayHello: function(name) {
    console.log(`Hello, my name is ${this.name}`);
  }
};
husband.sayHello();

// Principle 3

function Person (us) {
  this.age = us.age;
  this.name = us.name;
  this.speak = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  };
}

const hubs = new Person({name:'Bennie', age:29});
const wife = new Person({name: 'Jazz', age:34});
const dog = new Person({name: 'Cheif', age:14});

hubs.speak();
wife.speak();
dog.speak();

// Principle 4

function Person (us) {
  this.age = us.age;
  this.name = us.name;
  this.speak = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  };
}

const hubby = new Person({name:'Bennie', age:29});
const wifey = new Person({name: 'Jazz', age:34});

hubby.speak.call(wifey);
wifey.speak.apply(hubby);


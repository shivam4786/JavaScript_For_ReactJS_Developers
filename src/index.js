//ES6 for React JS

//Importing Teacher_1 module from Teacher.js
import Teacher_1, {promote} from './Teacher';

console.log('ES6 for React JS');

//Implementation with Var 
console.log(' ');
console.log('Implementation with Var ->');
function hello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

hello();

//Implementation with Let
console.log(' ');
console.log('Implementation with Let ->');
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //i will be limited to for loop scope 
  console.log('i will be limited to for loop scope ');
  //will give error 
  //console.log(i);
}

sayHello();

//Const Variable also has local scope
console.log(' ');
console.log('Const Variable also has local scope');
const x = 2;
console.log(x);

//x = 3;
//console.log(x);
//will give Error if we reassign Const variable

//Implementation of Objects 
console.log(' ');
console.log('Implementation of Objects');

const obj = {
  name: 'shivam',
  //Traditional Method for Methods in JS
  walk: function () { console.log('will Walk in Traditional Way') },
  //ES6 way for Methods
  talk() { console.log('will Talk in ES6 Way') },
  this_custom() { console.log('this -> ', this) }
}

obj.walk();

//Targeting property by Bracket Notation
console.log(' ');
console.log('Targeting property by Bracket Notation');
const targetName = 'name';
console.log(obj[targetName]);

console.log(' ');
obj.talk();

//Implementation of This keyword
console.log(' ');
console.log('Implementation of This keyword');
//This will Refer to the Calling Object
console.log('This will Refer to the Calling Object');
obj.this_custom();
//But Creating a variable and passing refrence ('creating a Reference not calling the function') to function to that variable
const custom_this = obj.this_custom;

//Now Calling our variable as function
//We will get this refrencing to window not the calling Object
console.log(custom_this());

console.log(' ');
//Binding This in ES6
//Remember JS Functions are Objects
//Bind can be used to Bind a function to an Object
//Here " custom_this_1 " will have a new instance of " obj.this_custom " and bind Method will bind " obj.this_custom " with Argument passed in " bind(Argument) " Method
const custom_this_1 = obj.this_custom.bind(obj);
custom_this_1();


//Fat Arrow Functions " function = () => {} "
console.log(' ');
console.log('Fat Arrow Functions " function = () => {} "');

const square = (number) => { console.log(number * number) };
square(3);

//Requirement of Fat Arrow Functions
console.log(' ');
console.log('Fat Arrow Functions " function = () => {} "');
const jobs = [
  {
    jobId: 1,
    isActive: true
  },
  {
    jobId: 2,
    isActive: true
  },
  {
    jobId: 3,
    isActive: false
  }
]

console.log(jobs);
console.log('Will list every active job in Jobs Array');
const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);

//Fat Arrow Functions and This 
console.log(' ');
//We used Old Syntax of funtion Definition
//in this case " setTimeout " is not bound to person object and will refer to Window 
//Additional thing you will learn is JS executes Line by Line but functions like setTimeout are in queue thread in JS and will be executed at the end of other statements
console.log('Additional thing you will learn is JS executes Line by Line but functions like setTimeout are in queue thread in JS and will be executed at the end of other statements');
var person_1 = {
  walk() {
    setTimeout(function () {
      console.log(' ');
      console.log(' this is in setTimeout function and will be excuted at the end of JS File because of Queue Thread ', this)
    }, 1000)
  }
}

person_1.walk();

//We used ES6 Syntax of Function Definition
//in this scenario with fat arrow functions will inherit this keyword and will refer to the object in which they are defined when we call them
console.log(' ');
var person_2 = {
  talk() {
    setTimeout(() => {
      console.log(' ');
      console.log('this is in setTimeout function and will be excuted at the end of JS File because of Queue Thread ', this);
    }, 1000)
  }
}

person_2.talk();

//Array.Map()
//map() function accepts call back function
console.log(' ');
console.log('Array.Map() map() function accepts call back function');
const colors = ['red', 'green', 'blue'];
console.log('Will list Array of Colors ',colors);

//Will List Every Single Color as List
console.log(' ');
console.log('Will List Every Single Color as List');
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

//Object destructuring
console.log(' ');
const address = {
  street: 'Mohalla Sheikhan',
  city: 'Dasuya',
  country: 'India'
}
console.log(address);

//Example of Object destructuring
console.log(' ');
console.log('Example of Object destructuring');
const { street, city, country } = address;
console.log(street, city, country);

//Example of Object Destructuring using alias 
//We are extracting street property of address object 
console.log(' ');
console.log('Example of Object destructuring, We are extracting street property of address object ');
const { street: st } = address;
console.log(st);

//Spread Operator
console.log(' ');
console.log('Spred Operator');

//Old Way is 
console.log(' ');
console.log('Old Way is ');
const first = [1,2,3];
const second = [4,5,6];

const combine = first.concat(second);
//Will Combine
console.log(combine);

//New way using spread operator
console.log(' ');
console.log('New way using spread operator');
const clone = [...first,...second];
//Will Clone
console.log(clone);

//Combine and add new props in an object
console.log(' ');
console.log('Combine and add new props in an object');
const fir = {
  name: 'shivam'
};

const sec = {
  job: 'cs'
};

const final = {...fir, ...sec, location: "Chandigarh"};
console.log(final);

//Classes
console.log(' ');
console.log('In Classes first letter is Uppercase ');

//Creating a Blue Print of Object can be made with Classes
class Person{
  //with OOPS Concept we have to call constructor function to instantiate the Class and 
  //set some values 
  constructor(myName){
    this.name = myName
  }

  walk(){
    console.log('walk');
  }
}

//creating a person object using "new" keyword 
//we set person_4 to a new Person Object 
const person_4 = new Person('shivam');
console.log(person_4.name);

//Inheritance
console.log(' ');
console.log('Inheritance');
class Teacher extends Person{
  constructor(name, degree){
    //We have to call Constructor of Parent Class in Child Class using Super Keyword
    super(name);
    this.name = name;
    this.degree = degree;
  }
  teach(){
    console.log('teach');
  }
}

//If after extending Parent class we do not pass arguments which are required in Parent 
//Constructor then we get property name undefined like this 
const teacher_1 = new Teacher();
console.log(teacher_1.name);

//But in this case I'm passing arguments in teacher object then it will display
console.log(' ');
const teacher_2 = new Teacher('shivam', 'CS');
console.log(teacher_2.name);
console.log(teacher_2.degree);

//Modules
//We created 2 Modules one for Person.js as Person_1 and other is Teacher.js as Teacher_1
//Imported them at Top and used to create an object. 
//This is known as "Modularisation"

//We can Import with Default Keyword which will import everything
//We can use named export which will Import only specified Imports
console.log(' ');
console.log('Modules');
const teacher_3 = new Teacher_1('shivam', 'CS');
teacher_3.walk();
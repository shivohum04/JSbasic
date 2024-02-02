// ES6 FEATURES IN JAVASCRIPT 
// 1. LET CONST 
// let 
let x = 10;
if (x === 10) {
  let x = 20;  // Different variable
  console.log(x);  // 20
}
console.log(x);  // 10
// using const 
const y = 5;
// y = 10;  // This will throw an error
console.log(y);  // 5

// 2. ARROW FUNCTIONS 
const add = (a, b) => a + b;
console.log(add(5, 3));  // 8

// 3. DEFAULT PARAMETERS 
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}
greet();  // Hello, World!
greet('Dave');  // Hello, Dave!

// 4. DESTRUCTURING 
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(firstName);  // John
console.log(lastName);  // Doe

// 5. SPREAD OPERATOR 
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);  // [1, 2, 3, 4, 5]

//6. PROMISES
const isTrue = true;
const promise = new Promise((resolve, reject) => {
  if (isTrue) {
    resolve('Success!');
  } else {
    reject('Failure.');
  }
});
promise.then((value) => console.log(value)).catch((error) => console.log(error));

//7. SYNTAX FOR CLASSES 
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

//8. MAP AND SET 
const map = new Map();
map.set('a', 1);
console.log(map.get('a'));  // 1

const set = new Set([1, 2, 3, 3]);
console.log(set.size);  // 3 (because '3' is duplicated)

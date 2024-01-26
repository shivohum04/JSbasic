// FUNCTIONS AND TYPE OF FUNCTIONS IN JAVASCRIPT

// What is a Function in JavaScript?
// In JavaScript, a function is a reusable block of code that can perform a specific task or return a value. 

// NAMED FUNCTIONS :
function add(num1,num2) {
    return num1+num2 ;
  }
  
let answer = add(4,56);
console.log("answer = "+answer)

// ANONYMOUS FUNCTIONS: An anonymous function is defined without a name and can be assigned to a variable. It's often used as a callback function or within other functions
let jodo = function (a, b) {
    return a + b;
  };
  
let result = jodo(3, 5);
console.log(result); 

// ARROW FUNCTIONS :
const sum = (num1,num2) => num1 + num2;

let sumValue = sum(20,50);
console.log(sumValue); 

  
// ASYNC JAVASCRIPT 
// 1. Callback functions 
// 2. Promises
// 3. Async and Await in JS

// CALLBACK FUNCTIONS : A callback function is a function that is passed as an argument to another function and is executed after that function has completed its task. 
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); 
  }
  
function sayGoodbye() {
    console.log("Goodbye!");
  }
greet("Alice", sayGoodbye);

// callback with setTimeout function 

function delayedMessage(message, delay, callback) {
    setTimeout(function () {
      console.log(message);
      callback(); 
    }, delay);
}
  
function sayThanks() {
    console.log("Thanks for waiting!");
}
delayedMessage("Hello, world!", 2000, sayThanks);

// PROMISES
// Promises have three states: pending, fulfilled (resolved) (then), or rejected (catch).
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        resolve(data); 
      }, 2000); 
    });
  }

fetchData()
    .then((result) => {
      console.log(result.message); 
    })
    .catch((error) => {
      console.error(error);
    });

// ASYNC and AWAIT 

function fetcData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data got successfully!" };
        resolve(data);
      }, 2000); 
    });
  }
  
  async function getData() {
    try {
      const result = await fetcData(); 
      console.log(result.message); 
    } catch (error) {
      console.error(error);
    }
  }
  getData();
  
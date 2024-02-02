// PROMISES 
// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
  const condition = true; // You can set this to false to test the rejection

  // Simulating some asynchronous operation
  setTimeout(() => {
    if (condition) {
      resolve('Promise is resolved successfully.'); // Resolving the promise
    } else {
      reject('Promise is rejected.'); // Rejecting the promise
    }
  }, 2000); // 2 seconds delay to simulate async operation
});

// Using the Promise
myPromise
  .then((successMessage) => {
    // successMessage is whatever we passed in the resolve() function above
    console.log('Success: ' + successMessage);
  })
  .catch((errorMessage) => {
    // errorMessage is whatever we passed in the reject() function above
    console.log('Error: ' + errorMessage);
  });

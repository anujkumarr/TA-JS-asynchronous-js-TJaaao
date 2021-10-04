// Q.1

let newPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise Resolved"),1000)
})
  .then((value) => console.log(value));

  // Q.2

let newPromise = new Promise((resolve, reject) => {
 reject('Something went wrong');
})
  .catch((error) => console.log(error));

  // Q.3

let anotherPromise = new Promise((resolve, reject) => {
  reject('Rejected Promise');
})
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Promise Settled")
  });

// Q.5

function wait(time) {
  return new Promise((res) => {
    setTimeout(() => res("Success"),time)
  })
    .then((value) => {
      console.log(value);
  })
}

// Q.6

let number = new Promise((resolve, reject) => {
  resolve(21);
})
  .then((value) => value + 10)
  .then((value) => value + 100)
  .then((value) => {
    if (value > 100) {
      return ("Error");
    }
  })
  .catch((error) => console.log(error));

 // Q.7
 
let str = new Promise((resolve) => {
  resolve(["A"]);

})
  .then((value) => {
    return value.concat("B");
  })
  .then(() => {
    return { 0: 'A', 1: 'B' };
  })
  .then((value) => {
    console.log(value);
  })
  
  // Q.8

let first = new Promise((resolve) => {
  resolve(1);
})
  .then((value) => {
    return 2;
  })
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    return 3;
  })
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    return 4;
  })
  .then((value) => {
    console.log(value);
  });

// Q.11

let data = new Promise((resolve, reject) => {
  resolve("John");
})
  .then((value) => {
    return new Promise((resolve) => {
      resolve("Arya");
    })
  })
  .then((value) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Bran"), 2000)
    })
  })
  .then((value) => {
    console.log(value);
  });
    

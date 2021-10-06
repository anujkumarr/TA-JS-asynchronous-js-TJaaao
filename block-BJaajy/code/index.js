
//1

function random() {
  return Math.floor(Math.random()*3+1);
}

let one = new Promise((res, rej) => {
  setTimeout(() => {
    res(random())
  }, 1000);
})

let two = new Promise((res, rej) => {
  setTimeout(() => {
    res(random());
  }, 2000);
});

let three = new Promise((res, rej) => {
  setTimeout(() => {
    res(random());
  }, 3000);
});

let four = new Promise((res, rej) => {
  setTimeout(() => {
    res(random());
  }, 4000);
});


let all = Promise.all([one, two, three, four]).then((res) => console.log(res))
  .catch((error) => console.log(error));

//2

const userName = ["anujkumarr", "nnnkit", "prank7", "getify", "abhishek-s-rathore"];


const data = Promise.all(
  userName.map((user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((users) => console.log(users.followers));
  })
);

//3

const URL = ['https://random.dog/woof.json', 'https://aws.random.cat/meow'];

Promise.race(URL.map(url => fetch(url))).then(console.log);

// 4

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.allSettled([one, two, three]).then(res => console.log(res));

// 5


// Create a promise
const myPromise = new Promise((resolve, reject) => {
  let isGood = Math.random() < 0.5;
  if (isGood) {
    resolve('You get a gift');
  } else {
    reject('No, you have been bad');
  }
});

const resolve = response => console.log(response);
const reject = error => console.log(error);
// Handle resolve/reject
myPromise.then(resolve).catch(reject);
// Create a function that returns a promise
const willIGetIceCream = () => {
  const isHot = Math.random() < 0.5;
  const myIceCreamPromise = new Promise((resolve, reject) => (isHot ? resolve('Yaaaaaas!!! 🍨🍦') : reject('No 😔')));
  return myIceCreamPromise;
};
// Handle the retunred promise
willIGetIceCream().then(resolve).catch(reject);

// Simple fetch API example: fetch returns a promise :D
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

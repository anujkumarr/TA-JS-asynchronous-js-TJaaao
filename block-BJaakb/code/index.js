function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      resolve(JSON.parse(xhr.response));
    }
    xhr.onerror = () => {
      reject("Something went wrong");
    }
    xhr.send();
  })
}

let data = fetch(`https://api.github.com/users/anujkumarr`).then((data) => {
  console.log(data.name);
}).catch((error) => {
  alert("Check Your internet connection")
});

//

let allImages = document.querySelector('.allImages');
let input = document.querySelector('input');

function handleImage(event) {
  if (event.keyCode === 13) {
    allImages.innerHTML = '';
    function fetch(url) {
      let xhr = new XMLHttpRequest();
      return new Promise((resolve, reject) => {
        xhr.open('GET', url);
        xhr.onload = () => {
          resolve(JSON.parse(xhr.response));
        };
        xhr.onerror = () => {
          reject('Something went wrong');
        };
        xhr.send();
        input.value = '';
      });
    }

    fetch(
      `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=PyPksXyG8aBNAVNpEk7cCM8uycMuuzBllmRX39o7E_M`
    )
      .then((data) => {
        for (let i = 0; i < data.results.length; i++) {
          allImages.innerHTML += `<img src="${data.results[i].urls.small}"/>`;
        }
      })
      .catch((error) => {
        error('Check Your Internet Connection');
      });
  }
}
input.addEventListener('keyup', handleImage);
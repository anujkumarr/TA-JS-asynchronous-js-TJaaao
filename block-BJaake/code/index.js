let source = document.getElementById('source');

function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
    resolve(JSON.parse(xhr.response));
    };
    xhr.onerror = function () {
      reject('error');
    };
    xhr.send();
  })
    .then((newsData) => {
      createUI(newsData);
    })
    .catch((error) => console.log(error));
}

let data = fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`);

let UnorderdList = document.querySelector('ul');

function createUI(data) {
  data.forEach((element) => {
    let list = document.createElement('li');
    list.classList.add('list');

    let articleImage = document.createElement('img');
    articleImage.classList.add('articleImage');
    articleImage.src = element.imageUrl;

    let titleNews = document.createElement('h2');
    titleNews.classList.add('titleNews');
    titleNews.innerHTML = element.title;

    let news = document.createElement('p');
    news.innerHTML = element.newsSite;
    news.style.marginTop = '20px';

    list.append(articleImage, titleNews, news);
    UnorderdList.append(list);
  });
}

source.addEventListener('change', fetch);

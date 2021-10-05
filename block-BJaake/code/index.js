let select = document.getElementById('source');
let UnorderdList = document.querySelector('ul');
let allNews = [];
let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;

function renderNews(news) {
  UnorderdList.innerHTML = '';
  news.forEach((newsItem) => {
    let li = document.createElement('li');
    li.classList.add('list');
    let img = document.createElement('img');
    img.classList.add('articleImage');
    img.src = newsItem.imageUrl;
    img.alt = newsItem.title;
    let div = document.createElement('div');
    div.classList.add('dataDiv');
    let span = document.createElement('span');
    span.classList.add('titleNews');
    span.innerText = newsItem.newsSite;

    let h3 = document.createElement('h3');
    h3.classList.add('tv');
    h3.innerText = newsItem.title;
    let a = document.createElement('a');
    a.classList.add('readMore');
    a.href = newsItem.url;
    let button = document.createElement('button');
    a.append(button);
    button.innerText = 'Read More';
    div.append(span, h3, a);
    li.append(img, div);
    UnorderdList.append(li);
  });
}

function displayOptions(sources) {
  sources.forEach((source) => {
    let option = document.createElement('option');
    option.innerText = source;
    option.value = source;
    select.append(option);
  });
}

fetch(url)
  .then((res) => res.json())
  .then((news) => {
    allNews = news;
    renderNews(news);

    let allSources = Array.from(new Set(news.map((n) => n.newsSite)));
    displayOptions(allSources);
  });

select.addEventListener('change', (event) => {
  let source = event.target.value.trim();
  if (source) {
    console.log(source);
    var filteredNews = allNews.filter((news) => news.newsSite === source);
    console.log(filteredNews);
  } else {
    filteredNews = allNews;
    console.log(allNews);
  }
  renderNews(filteredNews);
});

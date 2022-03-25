const gap = 16;
const widths = 240;

const domSeletors = {
  'content': '#content',
}

let movies = [];

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(widths + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - widths - gap <= carousel.scrollLeft + widths * 5) {
    next.style.display = "none";
  }
  console.log(content.scrollWidth);
  console.log(carousel.scrollLeft)
});


prev.addEventListener("click", e => {
  carousel.scrollBy(-(widths + gap), 0);
  if (carousel.scrollLeft - widths * 2 - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - widths - gap <= carousel.scrollLeft + widths) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


function generateMovieItem(movie) {
  return `<div>
  <img class="item-pic" src='${movie.imgUrl}'/>
  <h5>Movie: ${movie.name}</h5>
  <h5>Info: ${movie.outlineInfo}</h5>
  </div>`
}

function generateMovieList(movies) {
  return movies.map(movie => generateMovieItem(movie)).join('')
}

function renderMovieList(movies) {
  const tmp = generateMovieList(movies);
  const ele = document.querySelector(domSeletors.content);
  render(ele, tmp)
}

function render(element, template) {
  element.innerHTML = template;
}

function getMovies() {
  return fetch('http://localhost:3000/movies')
  .then(response => response.json())
}


getMovies().then(json => {
  movies = json;
  console.log('test', movies)
  renderMovieList(movies);
})


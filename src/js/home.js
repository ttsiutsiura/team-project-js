import NewAskServer from './fetch-films';

const gallery = document.querySelector('.films__list');
console.log('gallery', gallery);
const newAskServer = new NewAskServer();
const STORAGE_KEY = 'genresId';

askServerByReting();
saveInLocalStorageGenresId();

async function askServerByReting() {
  try {
    const data = await newAskServer.fetchMovieRating();
    const result = data.data.results;
    console.log(result);
    renderMovieRatingPage(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function saveInLocalStorageGenresId() {
  try {
    const genreData = await newAskServer.fetchGenresId();
    console.log(genreData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(genreData));
  } catch (error) {
    console.log(error);
  }
}

function renderMovieRatingPage(result) {
  const IMGURL = `https://image.tmdb.org/t/p/w500/`;
  const getGenresJson = localStorage.getItem(STORAGE_KEY);
  const parseGenresJson = JSON.parse(getGenresJson);
  const markup = result
    .map(({ poster_path, title, genre_ids, release_date }) => {
      let genreArr = [];
      for (const genre of parseGenresJson) {
        if (genre_ids.includes(genre.id)) {
          genreArr.push(genre.name);
        }
      }
      return `
            <li class="films__card" data-modal-p id="btnOpen">
  <img class="films__img" src="${IMGURL}${poster_path}" alt="${title}" loading="lazy" />
  <div class="films__desc">
    <h3 class="films__title">${title}</h3>
    <p class="films__genre">
    ${genreArr.slice(0, 2).join(", ")}
      <span>|</span>
      ${release_date.slice(0, 4)}
    </p>
  </div>
</li>
            `;
    })
    .join('');
  gallery.innerHTML = markup;
}

{
  /* <li class="films__card">
  <img class="films__img" src="${IMGURL}${poster_path}" alt="${title}" loading="lazy" />
  <div class="films__desc">
    <h3 class="films__title">${title}</h3>
    <p class="films__genre">
    ${genreArr}
      <span>|</span>
      ${release_date}
    </p>
  </div>
</li>; */
}

import movieCardTemplate from '/src/index';

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open-p]'),
//     closeModalBtn: document.querySelector('[data-modal-close-p]'),
//     modal: document.querySelector('[data-modal-p]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }
// })();



const gallery = document.querySelector('.film-modal');
console.log('gallery', gallery);
const IMGURL = 'https://image.tmdb.org/t/p/w500/';
// const noPosterImg = noPosterImage;

export function renderMovieCard(movie) {
  modal.innerHTML = '';

  if (movie.poster_path === null) {
    IMGURL = '';
  
  } else {
    IMGURL = 'https://image.tmdb.org/t/p/w500/';
  }

  movieModal = movieCardTemplate(movie);

  modal.insertAdjacentHTML('beforeend', movieModal);
  console.log(renderMovieCard)
}

export function movieCardTemplate({
  poster_path,
  title,
  vote_average,
  vote_count,
  original_title,
  popularity,
  genre_ids,
  overview,

}) {
    return `
  

<div class="film-modal__thumb">
      <img class="film-modal__img" src="${IMGURL}${poster_path}" alt="" />
    </div>
    
    <div class="film-modal__info-container">
      <h2 class="film-modal__title">${title}</h2>
      <table class="film-modal__table">
        <tbody class="film-modal__cell1">
          <tr>
            <td class="film-modal__cell film-modal__modal-text">
              Vote / Votes
            </td>
            <td class="film-modal__cell film-modal__modal-text">
              <span class="film-modal__span film-modal__span-vote">${vote_average}</span> "
              / "
              <span class="film-modal__span film-modal__span--votes">${vote_count}</span>
            </td>
          </tr>

          <tr>
            <td class="film-modal__cell film-modal__modal-text">Popularity</td>
            <td class="film-modal__cell film-modal__modal-text">${popularity}</td>
          </tr>

          <tr>
            <td class="film-modal__cell film-modal__modal-text">
              Oraginal Title
            </td>
            <td class="film-modal__cell film-modal__modal-text">${original_title}</td>
          </tr>

          <tr>
            <td class="film-modal__cell film-modal__modal-text">Genre</td>
            <td class="film-modal__cell film-modal__modal-text">
              ${genre_ids}
            </td>
          </tr>
        </tbody>
      </table>

         
      <h3 class="film-modal__subtitle">ABOUT</h3>
      <p class="fil-modal__text">${overview}</p>

      
      <ul class="film-modal__btn-list">
        <li class="film-modal__btn-item">
          <button
            class="btn modal-btn button-accent-btn"
            type=""
            data-action="watch"
          >
            ADD TO WATCHED
          </button>
        </li>
        <li class="film-modal__btn-item">
          <button class="btn modal-btn" type="" data-action="queue">
            ADD TO QUEUE
          </button>
        </li>
      </ul>
    </div>
  </div>

 `;
}


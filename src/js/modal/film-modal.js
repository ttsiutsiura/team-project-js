import movieCardTemplate from '/src/index';
// import '/src/modal/_film-modal.scss';

export { renderMovieInfo };
export { renderMovieCard };
  
// відкриття модального вікна
  
// document.getElementById('btnOpen').onClick = function open() {
//   console.log("open");
//   const a = document.getElementById("modal");
//   a.style.display = "visibility";
// }
  
  
// закриття модального вікна
// document.getElementById('btnClose').onclick = function close() {
// console.log("close");
// const x = document.getElementById("modal");
// x.style.display = "none";
// }

  
  
  
  
  // Close modal
function closeModal(e) {
  // Keyboard event
  // prettier-ignore
  if (e.type === "keydown") {
    // Not escape
    if (e.keyCode !== 27) {
      return;
    }
  } else
    // Mouse event
        
    // not backdrops
    if (!e.target.classList.contains("backdrop") && !e.target.classList.contains("backdrop__trailer"))
      // if closest elem target is not button = false -> check contains class
      if (e.target.closest("button") === null || !e.target.closest("button").classList.contains("modal-detail__close-button")) return;

  // If trailer is open
  if (checkStatusTrailer()) {
    // If opened trailer video - close it
    closeTrailerWindow();
    return;
  }

  // Toggle hidden class
  refs.modalDetailOverlay.classList.toggle("is-hidden");

  // Show scroll on body
  scrollableBody(true);

  // Deattach keyboard and mouse events
  refs.modalDetailOverlay.removeEventListener("click", closeModal);
  document.removeEventListener("keydown", closeModal);
}
  
  

const gallery = document.querySelector('.film-modal');
console.log('gallery', gallery);
const modalCard = document.querySelector('.film-modal__thumb');
let poster_path = '';

renderMovieCard();
renderMovieInfo();

const IMGURL = 'https://image.tmdb.org/t/p/w500/';
// const noPosterImg = noPosterImage;

function renderMovieCard(movie) {

  
  // modalCard.innerHTML = '';

  if (movie === poster_path) {
    IMGURL = '';
    } else {
    //  IMGURL = 'https://image.tmdb.org/t/p/w500/';
    console.log(error)
  }

  modalCard = movieCardTemplate(movie);

  modalCard.insertAdjacentHTML('beforeend', movieModal);
  console.log(modalCard.innerHTML)
}


 function renderMovieInfo({
  poster_path,
  title,
  genres,
  popularity,
  vote_count,
  vote_average,
  original_title,
  overview,
}) {
  const genresString = genres.map(genre => genre.name).join(', ');
  const IMGURL = 'https://image.tmdb.org/t/p/w500/';

 } {
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
              <span class="film-modal__span film-modal__span-vote">${vote_average.toFixed(
              1
            )}</span> "
              / "
              <span class="film-modal__span film-modal__span--votes">${vote_count}</span>
            </td>
          </tr>

          <tr>
            <td class="film-modal__cell film-modal__modal-text">Popularity</td>
            <td class="film-modal__cell film-modal__modal-text">${popularity.toFixed(1)}</td>
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
              ${genresString}
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
  </div>`;
}

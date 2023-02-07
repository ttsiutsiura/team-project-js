const body = document.querySelector('body');
const container = document.querySelector('.container');

setInterval(() => {
  const carrentDate = new Date();
  const carrentHours = carrentDate.getHours();
  console.log(carrentHours);
  if (carrentHours >= 20 || carrentHours <= 6) {
    container.classList.add('dark-body');
    container.classList.add('dark-container');
  } else {
    container.classList.remove('dark-body');
    container.classList.remove('dark-container');
  }
}, 1000);

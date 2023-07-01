const button = document.querySelector('.press');
const display = document.querySelector('input');

button.addEventListener('click', () => {
  display.value = Math.floor(Math.random() * 10);
});

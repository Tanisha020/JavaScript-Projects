const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const id = e.target.id;
    body.style.backgroundColor = `${id}`;
  });
});

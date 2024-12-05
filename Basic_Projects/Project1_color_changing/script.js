const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

# Project related to DOM

## Project link
[Click here](https://stackblitz.com/edit/vitejs-vite-arehrs?terminal=dev)

# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.background = e.target.id;
    }
  });
});


```
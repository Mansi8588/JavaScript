# Project related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-bqi49v?file=index.html)

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




## project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // post or get submit and after submit its value send to url or server so to stop
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = parseInt(document.querySelector('#results').value);

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid height';
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
  }
});


```

## Project 3
``` javascript 

const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock')

let date=new Date();

// run after 1sec 2sec we use setInterval
setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString()
},1000)




```
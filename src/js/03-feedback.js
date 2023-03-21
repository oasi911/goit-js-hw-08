const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const inputObj = {};

function inputValue(ev) {
  inputObj[ev.target.name] = ev.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputObj));
}
form.addEventListener('input', throttle(inputValue, 500));

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.clear();
  form.reset();
});

const formValues = localStorage.getItem('feedback-form-state');

if (formValues) {
  input.value = JSON.parse(formValues).email;
  message.value = JSON.parse(formValues).message;
}

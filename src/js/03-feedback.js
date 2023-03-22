const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');

function saveFormValues() {
  const formValues = {
    email: input.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
}

function restoreFormValues() {
  const formValues = localStorage.getItem('feedback-form-state');
  if (formValues) {
    const savedValues = JSON.parse(formValues);
    input.value = savedValues.email;
    message.value = savedValues.message;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const formValues = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(formValues);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

form.addEventListener('input', throttle(saveFormValues, 500));
form.addEventListener('submit', handleSubmit);

restoreFormValues();

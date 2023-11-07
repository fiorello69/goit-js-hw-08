import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveFormData = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const throttledSave = throttle(saveFormData, 500);

form.addEventListener('input', throttledSave);
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
});

import { sending } from "./addSending";

export const subscribe = () => {
  const footerForm = document.querySelector('.footer__connect');
  const footerInput = document.querySelector('.connect__input');
  async function sendForm(event) {
    event.preventDefault();
    sending(footerForm, 'add');
    if (footerInput.validity.valid && footerInput.value !== '') {
      let response = await fetch('../index.html', {
        method: 'GET'
      });
      if (response.ok) {
        sending(footerForm, 'remove');
        footerForm.reset();
      } else {
        sending(footerForm, 'remove');
        alert('error');
      }
    } else {
      sending(footerForm, 'remove');
      alert('error r');
    }
  }
  footerForm.addEventListener('submit', sendForm);
};

export const subscribe = () => {
  const footerForm = document.querySelector('.footer__connect');
  const footerInput = document.querySelector('.connect__input');
  async function sendForm(event) {
    event.preventDefault();
    footerForm.classList.add('_sending');
    if (footerInput.validity.valid && footerInput.value !== '') {
      let response = await fetch('../index.html', {
        method: 'GET'
      });
      if (response.ok) {
        footerForm.classList.remove('_sending');
        footerForm.reset();
      } else {
        alert('error');
      }
    } else {
      alert('error r');
    }
  }
  footerForm.addEventListener('submit', sendForm);
};

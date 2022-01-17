export const submitBook = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const asideForm = document.querySelector('.aside__form');
    async function sendForm(event) {
      event.preventDefault();
      const inputStart = document.querySelectorAll('.aside__search-output')[0].textContent;
      const inputLast = document.querySelectorAll('.aside__search-output')[1].textContent;
      const quantityInput = document.querySelector('.aside__quantity-output').textContent;
      const services = document.querySelectorAll('._text');
      const prices = document.querySelectorAll('._price');
      const factor = document.querySelector('.aside__factor').textContent;
      localStorage.setItem('start', inputStart);
      localStorage.setItem('last', inputLast);
      localStorage.setItem('quantity', quantityInput);
      for (let i = 0; i < services.length; i += 1) {
        localStorage.setItem(`service${i}`, services[i].textContent);
        localStorage.setItem(`price${i}`, prices[i].textContent);
      }
      if (document.querySelector('._discount')) {
        localStorage.setItem('discount', 0);
      }
      localStorage.setItem('factor', factor);
      document.location.href = 'https://kom9090.github.io/The_Glass_huts/confirm.html';
    }
    if (document.querySelector('.booking')) {
      asideForm.addEventListener('submit', sendForm);
    }
  });
};

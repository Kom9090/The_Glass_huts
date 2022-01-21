import { total } from "./total";

export const sendForm = () => {
  const closePopup = () => {
    const popupActive = document.querySelector('.popup.open');
    const lockPadding = document.querySelectorAll('.lock-padding');
    let unlock = true;
    const timeout = 300;
    const body = document.body;
    if (unlock) {
      popupActive.classList.remove('open');
      setTimeout(() => {
        for (let i = 0; i < lockPadding.length; i += 1) {
          const el = lockPadding[i];
          el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('_lock');
      }, timeout);
      unlock = false;
      setTimeout(() => {
        unlock = true;
      }, timeout);
    }
  };
  const addValueForm = () => {
    const asideOutput = document.querySelectorAll('.aside__search-output');
    const asideQuantity = document.querySelector('.aside__quantity-output');
    const quantityInput = document.querySelector('.quantity__input');
    const inputStart = document.querySelector('.book-form__hidden-in');
    const inputLast = document.querySelector('.book-form__hidden-up');
    const factor = document.querySelector('.aside__factor');
    asideOutput[0].textContent = new Date(inputStart.value).toLocaleDateString('en-US');
    asideOutput[1].textContent = new Date(inputLast.value).toLocaleDateString('en-US');
    asideQuantity.textContent = quantityInput.value;
    // eslint-disable-next-line max-len
    factor.textContent = (((new Date(inputLast.value) - new Date(inputStart.value)) / 86400000) + 1).toFixed(0);
  };
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.book-form');
    if (document.querySelector('.booking')) {
      // eslint-disable-next-line no-inner-declarations
      async function sendBook(event) {
        event.preventDefault();
        closePopup();
        addValueForm();
        total();
      }
      form.addEventListener('submit', sendBook);
    } else {
      // eslint-disable-next-line no-inner-declarations
      async function getLocalHistory(event) {
        event.preventDefault();
        const inputStart = document.querySelector('.book-form__hidden-in').value;
        const inputLast = document.querySelector('.book-form__hidden-up').value;
        const quantityInput = document.querySelector('.quantity__input').value;
        localStorage.setItem('start', inputStart);
        localStorage.setItem('last', inputLast);
        localStorage.setItem('quantity', quantityInput);
        location.assign('https://kom9090.github.io/The_Glass_huts/booking.html');
      }
      form.addEventListener('submit', getLocalHistory);
    }
  });
};

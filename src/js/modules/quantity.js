export const quantity = (input, minus, plus) => {
  const inputGuests = document.querySelector(input);
  const minusBtn = document.querySelector(minus);
  const plusBtn = document.querySelector(plus);
  function disablePlus() {
    plusBtn.classList.add('_no-active');
    plusBtn.setAttribute('tabindex', '-1');
    plusBtn.blur();
  }
  function enablePlus() {
    plusBtn.classList.remove('_no-active');
    plusBtn.removeAttribute('tabindex');
  }
  function disableMinus() {
    minusBtn.classList.add('_no-active');
    minusBtn.setAttribute('tabindex', '-1');
    minusBtn.blur();
  }
  function enableMinus() {
    minusBtn.classList.remove('_no-active');
    minusBtn.removeAttribute('tabindex');
  }
  disableMinus();

  inputGuests.addEventListener('blur', () => {
    if (inputGuests.value === '' || inputGuests.value < 2) {
      inputGuests.value = '1';
      disableMinus();
      enablePlus();
    } else if (+inputGuests.value >= 5) {
      inputGuests.value = '5';
      disablePlus();
      enableMinus();
    } else {
      enableMinus();
      enablePlus();
    }
  });

  plusBtn.addEventListener('click', () => {
    enableMinus();
    inputGuests.stepUp();
    if (+inputGuests.value === 5) {
      disablePlus();
    }
  });

  minusBtn.addEventListener('click', () => {
    enablePlus();
    inputGuests.stepDown();
    if (+inputGuests.value === 1) {
      disableMinus();
    }
  });
};


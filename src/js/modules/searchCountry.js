export const searchCountry = () => {
  document.querySelector('.select-country__input').addEventListener('input', function () {
    let val = this.value.trim();
    const countryOptions = document.querySelectorAll('.select-country__option');
    if (val !== '') {
      document.querySelector('.select-country__menu').classList.add('_show-list');
      countryOptions.forEach(function (item) {
        if (item.innerText.search(val) == -1) {
          item.classList.add('_hide');
        } else {
          item.classList.remove('_hide');
        }
      });
    } else {
      countryOptions.forEach(function (item) {
        item.classList.remove('_hide');
      });
    }
    countryOptions.forEach(function (item) {
      item.addEventListener('click', () => {
        let countryValue = document.querySelector('.select-country__input');
        countryValue.value = item.textContent;
        countryValue.classList.add('_valid');
        countryValue.focus();
      });
    });
  });
  document.addEventListener('click', (event) => {
    const countryMenu = document.querySelector('.select-country__menu');
    if (!event.target.closest('.select-country__input')) {
      countryMenu.classList.remove('_show-list');
    }
  });
};

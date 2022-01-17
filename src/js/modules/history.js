import { total } from "./total";
export const history = () => {
  if (document.querySelector('.booking') && localStorage.start) {
    const asideOutput = document.querySelectorAll('.aside__search-output');
    const asideQuantity = document.querySelector('.aside__quantity-output');
    const factor = document.querySelector('.aside__factor');
    const start = localStorage.getItem('start');
    const last = localStorage.getItem('last');
    const quantity = localStorage.getItem('quantity');
    asideOutput[0].textContent = new Date(start).toLocaleDateString('en-US');
    asideOutput[1].textContent = new Date(last).toLocaleDateString('en-US');
    asideQuantity.textContent = quantity;
    factor.textContent = (((new Date(last) - new Date(start)) / 86400000) + 1).toFixed(0);
    total();
    localStorage.clear();
  }
  if (document.querySelector('.confirm') && localStorage.start) {
    const asideInfo = document.querySelector('.aside__info');
    const asideOutput = document.querySelectorAll('.aside__search-output');
    const asideQuantity = document.querySelector('.aside__quantity-output');
    const factor = document.querySelector('.aside__factor');
    const start = localStorage.getItem('start');
    const last = localStorage.getItem('last');
    const quantity = localStorage.getItem('quantity');
    const factorValue = localStorage.getItem('factor');
    if (localStorage.getItem('start') !== 'Add dates') {
      asideOutput[0].textContent = new Date(start).toLocaleDateString('en-US');
      asideOutput[1].textContent = new Date(last).toLocaleDateString('en-US');
      asideQuantity.textContent = quantity;
      factor.textContent = factorValue;
    }
    let localLength = (localStorage.length - 4) / 2;
    if (localStorage.getItem('discount')) {
      const discount = document.createElement('aside');
      discount.className = 'aside__info-item _discount';
      discount.innerHTML = `<span class="aside__info-text">10% discount</span>
        <span class="aside__info-price _coeff"></span>`;
      asideInfo.append(discount);
      localLength = (localStorage.length - 5) / 2;
    }
    for (let i = 0; i < localLength; i += 1) {
      const aside = document.createElement('aside');
      aside.className = 'aside__info-item';
      aside.innerHTML = `<span class="aside__info-text">${localStorage.getItem(`service${i}`)}</span>
          <span class="aside__info-price">${localStorage.getItem(`price${i}`)}</span>`;
      asideInfo.append(aside);
    }
    total();
    localStorage.clear();
  }
};

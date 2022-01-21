import { total } from "./total";
import { sending } from "./addSending";

export const addDiscount = () => {
  const discountForm = document.querySelector('.aside__discount');
  const discountInput = document.querySelector('.aside__input-coupon');
  if (document.querySelector('.booking')) {
    discountForm.addEventListener('submit', getDiscount);
  }
  async function getDiscount(event) {
    event.preventDefault();
    sending(discountForm, 'add');
    if (discountInput.validity.valid && discountInput.value !== '') {
      let response = await fetch('../index.html', {
        method: 'GET'
      });
      if (response.ok) {
        sending(discountForm, 'remove');
        const discountIs = document.querySelector('._discount');
        if (discountIs) {
          discountIs.remove();
        }
        const discount = document.createElement('aside');
        const asideInfo = document.querySelector('.aside__info');
        discount.className = 'aside__info-item _discount';
        discount.innerHTML = `<span class="aside__info-text">10% discount</span>
        <span class="aside__info-price _coeff"></span>`;
        asideInfo.append(discount);
        total();
        discountForm.reset();
      } else {
        alert('error');
      }
    } else {
      alert('error r');
    }
  }
};

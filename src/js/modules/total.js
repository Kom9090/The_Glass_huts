/* eslint-disable no-mixed-operators */
export const total = () => {
  const priceBit = document.querySelectorAll('.aside__info-price');
  const totalPrice = document.querySelector('.aside__total-price');
  const factor = document.querySelector('.aside__factor');
  const mainPrice = document.querySelector('.aside__main-price');
  const discount = document.querySelector('._discount');
  const coeff = document.querySelector('._coeff');
  priceBit[0].textContent = `${(mainPrice.textContent.replace(/\s/g, '') * factor.textContent).toLocaleString()}${String.fromCharCode(8364)}`;
  // eslint-disable-next-line no-shadow
  let total = 0;
  for (let i = 0; i < priceBit.length; i += 1) {
    if (!priceBit[i].classList.contains('_coeff')) {
      let priceValue = priceBit[i].textContent.replace(/\s/g, '');
      let cent = priceValue.substring(0, priceValue.length - 1) * 100;
      total += cent;
    }
  }
  if (discount) {
    coeff.textContent = (-total * 10 / 100 / 100).toLocaleString('en-US') + String.fromCharCode(8364);
    total = total * 90 / 100;
  }
  totalPrice.textContent = `${(total / 100).toLocaleString('en-US')}${String.fromCharCode(8364)}`;
};

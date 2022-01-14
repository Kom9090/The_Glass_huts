import { total } from "./total";

export const services = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  const asideInfo = document.querySelector('.aside__info');
  // снять отметку с чекбокса при повторном клике
  const clickRadio = (el) => {
    const element = el;
    const value = document.querySelectorAll("input[type='radio'][name='" + element.name + "']");
    for (let i = 0; i < value.length; i += 1) {
      if (value[i] !== element) {
        value[i].BeforeCheck = false;
      }
    }
    if (element.BeforeCheck) {
      element.checked = false;
    }
    element.BeforeCheck = element.checked;
  };
  // события отмечания чекбокса
  const checkedBox = () => {
    checkboxes.forEach(checkbox => {
      const text = checkbox.parentElement.lastElementChild.firstElementChild.textContent;
      // eslint-disable-next-line max-len
      const price = checkbox.parentElement.lastElementChild.lastElementChild.textContent;
      checkbox.addEventListener('click', () => {
        clickRadio(checkbox);
        if (checkbox.checked) {
          // checkbox.checked = false;
          const aside = document.createElement('aside');
          const asideItems = document.querySelectorAll('.aside__info-item');
          aside.className = `aside__info-item ${checkbox.classList[1]}`;
          aside.innerHTML = `<span class="aside__info-text">${text}</span>
          <span class="aside__info-price">${price}</span>`;
          for (let i = 0; i < asideItems.length; i++) {
            if (asideItems[i].classList.contains(`${checkbox.classList[1]}`)) {
              asideItems[i].remove();
            }
          }
          asideInfo.append(aside);
          total();
        } else {
          const asideItems = document.querySelectorAll('.aside__info-item');
          for (let i = 0; i < asideItems.length; i++) {
            if (asideItems[i].classList.contains(`${checkbox.classList[1]}`)) {
              asideItems[i].remove();
            }
          }
          total();
        }
      });
    });
  };
  checkedBox();
};

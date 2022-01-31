/* eslint-disable func-names */
export const customSelect = () => {
  const selects = document.querySelectorAll('.select');
  const optionLists = document.querySelectorAll('.option-list');
  const selectLang = document.querySelector('.select-lang');
  const selectTel = document.querySelector('.select-code');
  const cardSelect = document.querySelector('.select-card');
  const langOptions = document.querySelectorAll('.select-lang__option');
  const codeOptions = document.querySelectorAll('.select-code__option');
  const cardOptions = document.querySelectorAll('.select-card__option');
  function localChanges(selectParent, select) {
    // eslint-disable-next-line default-case
    switch (selectParent) {
      case selectLang:
        langOptions.forEach(function (item) {
          item.addEventListener('click', () => {
            item.after(select.nextElementSibling);
            item.prepend(select.firstElementChild);
            select.prepend(item.lastElementChild);
            select.after(item.parentElement.lastElementChild);
            select.nextElementSibling.classList.remove('_show-list');
            select.classList.remove('_selected');
          });
        });
        break;
      case selectTel:
        codeOptions.forEach(function (item) {
          item.addEventListener('click', () => {
            select.append(item.firstElementChild);
            item.append(select.firstElementChild);
            select.nextElementSibling.classList.remove('_show-list');
            select.classList.remove('_selected');
          });
        });
        break;
      case cardSelect:
        cardOptions.forEach(function (item) {
          item.addEventListener('click', () => {
            let cardValue = document.querySelector('.select-card__input');
            cardValue.classList.add('_valid');
            cardValue.value = item.textContent;
            cardValue.focus();
          });
        });
        break;
    }
  }
  selects.forEach((select, i) => {
    let selectParent = select.parentElement;
    select.addEventListener('click', () => {
      optionLists[i].classList.toggle('_show-list');
      select.classList.toggle('_selected');
    });

    localChanges(selectParent, select);

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.select')) {
        for (let n = 0; n < optionLists.length; n += 1) {
          optionLists[n].classList.remove('_show-list');
          select.classList.remove('_selected');
        }
      }
    });
  });
};

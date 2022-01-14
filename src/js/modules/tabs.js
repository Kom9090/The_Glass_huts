export const tabs = () => {
  const tabBtns = document.querySelectorAll('.info-block__btn');
  const tabContent = document.querySelectorAll('.info-block__text');

  tabBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
      let arrSisters = item.parentElement.children;
      let arrContent = tabContent[index].parentElement.children;
      for (let i = 0; i < arrSisters.length; i += 1) {
        arrSisters[i].classList.remove('_active-tab');
        arrContent[i].classList.remove('_active-tab');
      }
      item.classList.add('_active-tab');
      tabContent[index].classList.add('_active-tab');
    });
  });
};

import { getScrollbarWidth } from "./getScrollbarWidth";
export const burgerMenu = () => {
  const burgerBtn = document.querySelector('.burger'); 
  const menuList = document.querySelector('.menu__list');
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger_active');
    menuList.classList.toggle('menu__list_active');
    document.body.classList.toggle('_lock');
    document.querySelector('.content').classList.toggle('_lock');
    const paddingValue = getScrollbarWidth();
    document.body.style.paddingRight = paddingValue;
    document.querySelector('.header__body').style.paddingRight = paddingValue;
  });
  document.documentElement.addEventListener('click', (event) => {
    if (!event.target.closest('.header__burger') && !event.target.closest('.select-lang') && burgerBtn.classList.contains('burger_active')) {
      burgerBtn.classList.remove('burger_active');
      menuList.classList.remove('menu__list_active');
      document.body.classList.remove('_lock');
      document.querySelector('.content').classList.remove('_lock');
      document.body.style.paddingRight = '0px';
      document.querySelector('.header__body').style.paddingRight = '0px';
    }
  });
};

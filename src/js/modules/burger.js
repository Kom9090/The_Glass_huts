export const burgerMenu = () => {
  const burgerBtn = document.querySelector('.burger'); 
  const menuList = document.querySelector('.menu__list');
  const IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger_active');
    menuList.classList.toggle('menu__list_active');
    document.body.classList.toggle('_lock');
    document.querySelector('.content').classList.toggle('_lock');
    if (!IS_MOBILE) {
      if (document.body.classList.contains('_lock')) {
        document.body.style.paddingRight = '8px';
        document.querySelector('.header__body').style.paddingRight = '8px';
      } else {
        document.body.style.paddingRight = '0px';
        document.querySelector('.header__body').style.paddingRight = '0px';
      }
    }
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

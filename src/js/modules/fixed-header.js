export const fixedHeader = () => {
  const header = document.querySelector('.header');
  const callback = (entries) => {
    if (entries[0].isIntersecting) {
      header.classList.remove('header_scrolling');
    } else {
      header.classList.add('header_scrolling');
    }
  };
  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(header);
};

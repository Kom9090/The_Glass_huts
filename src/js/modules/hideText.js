export const hideText = () => {
  if (document.querySelector('.btn-more')) {
    const btnsMore = document.querySelectorAll('.btn-more');
    btnsMore.forEach(item => {
      item.addEventListener('click', () => {
        if (item.textContent === 'Read More') {
          item.textContent = 'Hide More';
          item.previousElementSibling.classList.add('_all-text');
          item.previousElementSibling.style.opacity = '0.4';
          item.previousElementSibling.style.height = item.previousElementSibling.scrollHeight + 'px';
          const slowChanges = () => {
            item.previousElementSibling.style.opacity = '1';
            item.previousElementSibling.style.height = 'auto';
          };
          window.setTimeout(slowChanges, 500);
        } else {
          const scrollTopValue = -(item.previousElementSibling.scrollHeight - 210);
          window.scrollBy(0, scrollTopValue);
          item.previousElementSibling.style.opacity = '0.4';
          item.previousElementSibling.classList.remove('_all-text');
          item.previousElementSibling.style.removeProperty('height');
          item.textContent = 'Read More';
          const opacityChange = () => {
            item.previousElementSibling.style.opacity = '1';
          };
          window.setTimeout(opacityChange, 500);
        }
      });
    });
  }
};

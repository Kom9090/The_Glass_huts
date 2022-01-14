export const labelToTop = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.previousElementSibling.classList.add('input-block__placeholder_focus');
      });
      input.addEventListener('blur', () => {
        if (input.value === '') {
          input.previousElementSibling.classList.remove('input-block__placeholder_focus');
        }
      });
    });
  });
};

export const submitBook = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const asideForm = document.querySelector('.aside__form');
    async function sendForm(event) {
      event.preventDefault();
      document.location.href = '../confirm.html';
    }
    if (document.querySelector('.booking')) {
      asideForm.addEventListener('submit', sendForm);
    }
  });
};

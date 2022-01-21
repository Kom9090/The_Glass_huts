export const sending = (form, state) => {
  if (state === 'add') {
    const loader = document.createElement('div');
    loader.className = 'sending';
    loader.innerHTML = '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>';
    form.append(loader);
    form.classList.add('_sending');
  }
  if (state === 'remove') {
    const loader = document.querySelector('.sending');
    form.classList.remove('_sending');
    loader.remove();
  }
};

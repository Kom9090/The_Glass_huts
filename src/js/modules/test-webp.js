const testWebP = (callback) => {
  const webP = new Image();
  webP.onload = webP.onerror = () => {
    callback(webP.height == 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

testWebP(function (support) {
  if (support == true) {
    const db = document.querySelectorAll('[data-background]');
    db.forEach(index => {
      // eslint-disable-next-line no-param-reassign
      index.dataset.background = index.dataset.background.replace('jpg', 'webp');
    });
  }
});

export default testWebP;

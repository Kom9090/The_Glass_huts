// функция добавления нескольких атрибутов елементу
const setAttributes = (names, options) => { // принимает имя атрибута и его значение
  Object.keys(options).forEach(function (attr) {
    names.setAttribute(attr, options[attr]);
  });
};

// получение шаблона тултипа
const getTamplate = (text, id) => { // принимает текст тултипа и порядковый номер тултипа
  const div = document.createElement('div');
  setAttributes(div, {
    id: `${id}`,
    class: 'tt-content',
    role: 'tooltip'
  });
  div.innerHTML = text;
  return div;
};

const getDirection = (elem, tt, left, right, top, bottom) => {
  const distance = {
    left: elem.offsetLeft,
    top: elem.getBoundingClientRect().top,
    right: document.documentElement.clientWidth - elem.getBoundingClientRect().right,
    bottom: document.documentElement.clientHeight - elem.getBoundingClientRect().bottom
  };

  const direction = Object.keys(distance).reduce((a, b) => {
    return +distance[a] > +distance[b] ? a : b;
  });

  if (direction === 'bottom') {
    tt.style.transform = bottom;
  } else if (direction === 'top') {
    tt.style.transform = top;
  } else if (direction === 'right') {
    tt.style.transform = right;
  } else {
    tt.style.transform = left;
  }
};

export default class Tooltip {
  constructor(elem, options) { // принимает селектор елемента на котором всплывает тултип
    this.$el = document.querySelectorAll(elem);
    this.id = elem.substring(1);
    this.#render();
    this.#titleHide();
    this.options = options;
    this.#mouseMove();
    this.#mouseOut();
  }

  // метод созддание html тултипа
  #render() {
    this.$el.forEach((item, index) => {
      item.setAttribute('aria-describedby', `${this.id + index}`);
      item.after(getTamplate(`${item.title}`, `${this.id + index}`));
    });
  }

  // скрытие title
  #titleHide() {
    this.$el.forEach(item => {
      item.title = '';
    });
  }

  // обработчик события наведения мыши на елемент
  #mouseMove() {
    this.$el.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        this.getPosition(item, e);
        this.show(item);
      });
    });
  }

  // обработчик события когда мышь покидает область елемента
  #mouseOut() {
    this.$el.forEach(item => {
      item.addEventListener('mouseleave', () => {
        this.hide(item);
      });
    });
  }

  getPosition(elem, e) {
    const { type = 'auto' } = this.options;
    const { indent = 12 } = this.options;
    const { arrow = false } = this.options;
    const tt = elem.nextElementSibling;
    const left = () => {
      if (elem.getBoundingClientRect().top - (tt.offsetHeight - elem.offsetHeight) / 2 < 0) {
        return `translate(${elem.offsetLeft - tt.offsetWidth - indent}px, ${elem.offsetTop}px)`;
      } if (elem.offsetTop - (tt.offsetHeight - elem.offsetHeight) / 2 + tt.offsetHeight > document.documentElement.clientHeight) {
        return `translate(${elem.offsetLeft - tt.offsetWidth - indent}px, ${elem.offsetTop - tt.offsetHeight + elem.offsetHeight}px)`;
      }
      return `translate(${elem.offsetLeft - tt.offsetWidth - indent}px, ${elem.offsetTop - (tt.offsetHeight - elem.offsetHeight) / 2}px)`;
    };
    const right = () => {
      if (elem.getBoundingClientRect().top - (tt.offsetHeight - elem.offsetHeight) / 2 < 0) {
        return `translate(${elem.offsetLeft + elem.offsetWidth + indent}px, ${elem.offsetTop}px)`;
      } if (elem.offsetTop - (tt.offsetHeight - elem.offsetHeight) / 2 + tt.offsetHeight > document.documentElement.clientHeight) {
        return `translate(${elem.offsetLeft + elem.offsetWidth + indent}px, ${elem.offsetTop - tt.offsetHeight + elem.offsetHeight}px)`;
      }
      return `translate(${elem.offsetLeft + elem.offsetWidth + indent}px, ${elem.offsetTop - (tt.offsetHeight - elem.offsetHeight) / 2}px)`;
    };
    const top = () => {
      if (elem.getBoundingClientRect().left - (tt.offsetWidth - elem.offsetWidth) / 2 < 0) {
        return `translate(${indent}px, ${elem.offsetTop - tt.offsetHeight - indent}px)`;
      } if (elem.getBoundingClientRect().left - (tt.offsetWidth - elem.offsetWidth) / 2 + tt.offsetWidth > document.documentElement.clientWidth) {
        return `translate(${document.documentElement.clientWidth - tt.offsetWidth - indent}px, ${elem.offsetTop - tt.offsetHeight - indent}px)`;
      }
      return `translate(${elem.offsetLeft - (tt.offsetWidth - elem.offsetWidth) / 2}px, ${elem.offsetTop - tt.offsetHeight - indent}px)`;
    };
    const bottom = () => {
      if (elem.getBoundingClientRect().left - (tt.offsetWidth - elem.offsetWidth) / 2 < 0) {
        return `translate(${indent}px, ${elem.offsetTop + elem.offsetHeight + indent}px)`;
      } if (elem.getBoundingClientRect().left - (tt.offsetWidth - elem.offsetWidth) / 2 + tt.offsetWidth > document.documentElement.clientWidth) {
        return `translate(${document.documentElement.clientWidth - tt.offsetWidth - indent}px, ${elem.offsetTop + elem.offsetHeight + indent}px)`;
      }
      return `translate(${elem.offsetLeft - (tt.offsetWidth - elem.offsetWidth) / 2}px, ${elem.offsetTop + elem.offsetHeight + indent}px)`;
    };

    // eslint-disable-next-line default-case
    switch (type) {
      case 'auto':
        getDirection(elem, tt, left(), right(), top(), bottom(), arrow);
        break;
      case 'left':
        if (elem.offsetLeft < tt.offsetWidth + indent * 2) {
          getDirection(elem, tt, left(), right(), top(), bottom(), arrow);
        } else {
          tt.style.transform = left();
          if (arrow) {
            tt.classList.add('arrow-right');
          }
        }
        break;
      case 'right':
        if (document.documentElement.clientWidth - elem.offsetLeft - elem.offsetWidth - indent * 2 < tt.offsetWidth) {
          getDirection(elem, tt, left(), right(), top(), bottom());
        } else {
          tt.style.transform = right();
          if (arrow) {
            tt.classList.add('arrow-left');
          }
        }
        break;
      case 'top':
        if (elem.getBoundingClientRect().top - indent * 2 < tt.offsetHeight) {
          getDirection(elem, tt, left(), right(), top(), bottom(), arrow);
        } else {
          tt.style.transform = top();
          if (arrow) {
            tt.classList.add('arrow-bottom');
          }
        }
        break;
      case 'bottom':
        if (elem.getBoundingClientRect().bottom - indent * 2 < tt.offsetHeight) {
          getDirection(elem, tt, left(), right, top(), bottom(), arrow);
        } else {
          tt.style.transform = bottom();
          if (arrow) {
            tt.classList.add('arrow-top');
          }
        }
        break;
    }
  }

  show(elem) {
    elem.nextElementSibling.style.opacity = '1';
  }

  hide(elem) {
    elem.nextElementSibling.style.opacity = '0';
  }
}

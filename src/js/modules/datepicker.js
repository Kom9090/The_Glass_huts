import { dateState } from "./dataState.js";
/* eslint-disable no-plusplus */
export const datepicker = () => {
  const calendarWrapper = document.querySelector('.calendar');
  const bookForm = document.querySelector('.book-form');
  const searchOutputs = document.querySelectorAll('.search-btn__output');
  const searchBtns = document.querySelectorAll('.search-btn');
  /*
    *
    * функции
    *
  */
  // активация кнопки сабмит
  const searchBook = (date1, date2) => {
    const bookBtn = document.querySelector('.book-form__submit');
    if (date1.value === 'Invalid Date' || date2.value === 'Invalid Date') {
      bookBtn.setAttribute('disabled');
    } else {
      bookBtn.removeAttribute('disabled');
    }
  };
  // закрытие тела календаря по нажатию кнопки
  const closeCalendarBody = () => {
    calendarWrapper.classList.add('_hide');
  };
  // добавление дат в скрытые инпуты 
  const getDateToInput = () => {
    const inputStart = document.querySelector('.book-form__hidden-in');
    const inputLast = document.querySelector('.book-form__hidden-up');
    inputStart.value = new Date(searchOutputs[0].textContent);
    inputLast.value = new Date(searchOutputs[1].textContent);
    searchBook(inputStart, inputLast);
  };
  // сброс выбранных дат на кнопках поиска и на теле календаря
  const resetSelectDates = () => {
    const days = document.querySelectorAll('.days__item');
    days.forEach(item => {
      item.classList.remove('_checked');
      item.classList.remove('_checked-last');
    });
    searchOutputs.forEach(item => {
      const searchOutput = item;
      searchOutput.textContent = 'Add dates';
      searchOutputs[0].classList.add('search-btn__start_searching');
      searchOutputs[1].classList.remove('search-btn__last_searching');
    });
    getDateToInput();
  };
  // функция поиска индекса елемента на который навели мышью
  const findElementIndex = (element) => {
    const days = document.querySelectorAll('.days__item');
    return Array.prototype.indexOf.call(days, element);
  };
  // работа кнопки поиска начальной даты
  const searchFirstDate = (event, date, month) => {
    const lastDate = searchOutputs[1].textContent;
    const checkedLast = document.querySelector('._checked-last');
    if (date > dateState.state && dateState.state !== null) {
      if (checkedLast) {
        checkedLast.classList.remove('_checked-last');
      }
      event.target.classList.add('_checked-last');
      searchOutputs[1].textContent = `${new Date(event.target.textContent + month).toLocaleDateString('en-US')}`;
      dateState.setLastDay(date);
      getDateToInput();
    } else {
      event.target.classList.add('_checked');
      searchOutputs[0].textContent = `${new Date(event.target.textContent + month).toLocaleDateString('en-US')}`;
      searchBtns[0].classList.remove('search-btn__start_searching');
      searchBtns[1].classList.add('search-btn__last_searching');
      dateState.setFirstDay(date);
      getDateToInput();
      if (lastDate !== 'Add dates') {
        closeCalendarBody();
      }
    }
  };
  // работа кнопки поиска крайней даты
  const searchLastDate = (event, date, month) => {
    const firstDate = searchOutputs[0].textContent;
    const checked = document.querySelector('._checked');
    if (date < dateState.state && dateState.state !== null) {
      if (checked) {
        checked.classList.remove('_checked');
      }
      event.target.classList.add('_checked');
      searchOutputs[0].textContent = `${new Date(event.target.textContent + month).toLocaleDateString('en-US')}`;
      dateState.setFirstDay(date);
      getDateToInput();
    } else {
      event.target.classList.add('_checked-last');
      searchOutputs[1].textContent = `${new Date(event.target.textContent + month).toLocaleDateString('en-US')}`;
      searchBtns[1].classList.remove('search-btn__last_searching');
      searchBtns[0].classList.add('search-btn__start_searching');
      dateState.setLastDay(date);
      getDateToInput();
      if (firstDate !== 'Add dates') {
        closeCalendarBody();
      }
    }
  };
  // удаление ячеек с ховер еффектом
  const removeHoverEffect = () => {
    const days = document.querySelectorAll('.days__item');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < days.length; i++) {
      days[i].classList.remove('_hover');
    }
  };
  // добавление ховер еффекта ряду ячеек после выбранного елемента
  const addHoverEffect = (target, index) => {
    const days = document.querySelectorAll('.days__item');
    removeHoverEffect();
    if (index < target) {
      // eslint-disable-next-line no-plusplus
      for (let i = target; i > index; i--) {
        days[i].classList.add('_hover');
      }
    }
  };
  const addHoverEffectByZero = (target) => {
    const days = document.querySelectorAll('.days__item');
    removeHoverEffect();
    // eslint-disable-next-line no-plusplus
    for (let i = target; i >= 0; i--) {
      days[i].classList.add('_hover');
    }
  };
  // добавление ховер еффекта ряду ячеек в обратном направлении
  const addHoverEffectReverse = (target, index) => {
    const days = document.querySelectorAll('.days__item');
    removeHoverEffect();
    if (index > target) {
      for (let i = index; i >= target; i--) {
        days[i].classList.add('_hover');
      }
    }
  };
  const addHoverEffectByLast = (target) => {
    const days = document.querySelectorAll('.days__item');
    removeHoverEffect();
    // eslint-disable-next-line no-plusplus
    // eslint-disable-next-line for-direction
    for (let i = target; i <= days.length; i++) {
      days[i].classList.add('_hover');
    }
  };
  // открытие календаря при нажатии любой из кнопок поиска
  const openCalendar = () => {
    if (calendarWrapper.classList.contains('_hide')) {
      calendarWrapper.classList.remove('_hide');
    }
  };
  /*
    *
    * события
    *
  */
  // события на теле календаря
  calendarWrapper.addEventListener('click', (event) => {
    // кнопка закрыть
    if (event.target.closest('.calendar__close')) {
      closeCalendarBody();
    }
    // кнопка очистить даты
    if (event.target.closest('.calendar__reset')) {
      resetSelectDates();
      removeHoverEffect();
      dateState.setResetDay();
    }
    // если нажата кнопка определенного дня
    if (event.target.closest('.days__item')) {
      const searchingLast = document.querySelector('.search-btn__last_searching');
      // eslint-disable-next-line max-len
      const month = event.target.parentElement.parentElement.previousSibling.firstElementChild.textContent;
      const date = new Date(`${event.target.textContent} ${month}`);
      if (searchingLast) {
        searchLastDate(event, date, month);
      } else {
        searchFirstDate(event, date, month);
      }
    }
  });
  // mouseover
  calendarWrapper.addEventListener('mouseover', (event) => {
    if (event.target.closest('.days__item')) {
      const checkFirstDay = document.querySelector('._checked');
      const checkLastDay = document.querySelector('._checked-last');
      const zero = document.querySelector('._zero');
      const last = document.querySelector('._last');
      if (checkFirstDay && !checkLastDay) {
        addHoverEffect(findElementIndex(event.target), findElementIndex(checkFirstDay));
      } else if (checkLastDay && !checkFirstDay) {
        addHoverEffectReverse(findElementIndex(event.target), findElementIndex(checkLastDay));
      } else if (dateState.type === 'start' && !checkFirstDay && !checkLastDay && zero) {
        addHoverEffectByZero(findElementIndex(event.target));
      } else if (dateState.type === 'last' && !checkFirstDay && !checkLastDay && last) {
        addHoverEffectByLast(findElementIndex(event.target));
      }
    }
  });
  // события при нажатии кнопок поиска дат
  bookForm.addEventListener('click', (event) => {
    const checkFirstDay = document.querySelector('._checked');
    const checkLastDay = document.querySelector('._checked-last');
    const searchingFirst = document.querySelector('.search-btn__start_searching');
    const searchingLast = document.querySelector('.search-btn__last_searching');
    // если календарь закрыт - открываем и обнуляем текст формы
    if (event.target.closest('.search-btn')) {
      openCalendar();
    }
    if (event.target.closest('.search-btn__start')) {
      searchOutputs[0].textContent = 'Add dates';
      searchBtns[0].classList.add('search-btn__start_searching');
      removeHoverEffect();
      if (searchingLast) {
        searchBtns[1].classList.remove('search-btn__last_searching');
      }
      if (checkFirstDay) {
        checkFirstDay.classList.remove('_checked');
      }
      if (dateState.type === 'start') {
        if (searchOutputs[1].textContent !== 'Add dates') {
          dateState.setLastDay(new Date(searchOutputs[0].textContent));
        } else {
          dateState.setResetDay();
        }
      }
      getDateToInput();
    }
    if (event.target.closest('.search-btn__last')) {
      searchOutputs[1].textContent = 'Add dates';
      searchBtns[1].classList.add('search-btn__last_searching');
      removeHoverEffect();
      if (searchingFirst) {
        searchBtns[0].classList.remove('search-btn__start_searching');
      }
      if (checkLastDay) {
        checkLastDay.classList.remove('_checked-last');
      }
      if (dateState.type === 'last') {
        if (searchOutputs[0].textContent !== 'Add dates') {
          dateState.setFirstDay(new Date(searchOutputs[0].textContent));
        } else {
          dateState.setResetDay();
        }
      }
      getDateToInput();
    }
  });
  // ======================================================
};

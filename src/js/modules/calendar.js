import { dateState } from "./dataState.js";
export const calendar = () => {
  const calendarBodys = document.querySelectorAll('.days');
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let NAVIGATION_FIRST = 0;
  let NAVIGTION_SECOND = 1;
  const buttonPrev = document.querySelector('.calendar__arrow_prev');
  const buttonNext = document.querySelector('.calendar__arrow_next');
  // наполнение содержимым календаря
  const renderCalendar = (index, navigation) => {
    const startDay = new Date();
    const calendarBody = calendarBodys[index];
    if (navigation !== 0) {
      startDay.setMonth(new Date().getMonth() + navigation);
    }
    const day = startDay.getDate();
    const month = startDay.getMonth();
    const year = startDay.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    document.querySelectorAll('.date-month')[index].innerText = `${startDay.toLocaleDateString('en-us', { month: 'short' })} ${year}`;
    calendarBody.innerHTML = '';
    const daysArr = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i += 1) {
      const daySquare = document.createElement('div');
      daySquare.classList.add('days__item');
      daysArr.push(String(i - paddingDays));
      if (i > paddingDays) {
        daySquare.setAttribute('tabindex', '0');
        daySquare.innerText = i - paddingDays;
        if (i - paddingDays === day && navigation === 0) {
          daySquare.classList.add('today');
        }
      } else {
        daySquare.classList.add('_padding');
      }
      calendarBody.appendChild(daySquare);
    }
    dateState.compareDates(firstDayOfMonth, lastDayOfMonth, daysArr, calendarBody);
  };
  const renderNextMonth = () => {
    // eslint-disable-next-line no-plusplus
    NAVIGATION_FIRST += 1;
    NAVIGTION_SECOND += 1;
  };
  const renderPrevMonth = () => {
    // eslint-disable-next-line no-plusplus
    NAVIGATION_FIRST -= 1;
    NAVIGTION_SECOND -= 1;
  };
  // неактивная кнопка пролистывания назад месяцев
  const disableButtonPrev = () => {
    buttonPrev.style.opacity = '0.3';
    buttonPrev.style.pointerEvents = 'none';
    buttonPrev.setAttribute('tabindex', '-1');
    buttonPrev.blur();
  };
  const enableButtonPrev = () => {
    buttonPrev.style.removeProperty('opacity');
    buttonPrev.style.removeProperty('pointer-events');
    buttonPrev.removeAttribute('tabindex');
  };
  const disablePrevDays = () => {
    const monthArr = document.querySelectorAll('.days__item');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < monthArr.length; i += 1) {
      if (monthArr[i].classList.contains('today')) {
        break;
      } else {
        monthArr[i].classList.add('_disable');
        monthArr[i].removeAttribute('tabindex');
      }
    }
  };
  // при загрузке страницы наполнение содержимого календаря,
  // деактивация кнопки предыдущих месяцев и прошедших дат
  document.addEventListener('DOMContentLoaded', () => {
    renderCalendar(0, NAVIGATION_FIRST);
    renderCalendar(1, NAVIGTION_SECOND);
    disableButtonPrev();
    disablePrevDays();
  });
  // посмотреть следующие
  buttonNext.addEventListener('click', () => {
    renderNextMonth();
    renderCalendar(0, NAVIGATION_FIRST);
    renderCalendar(1, NAVIGTION_SECOND);
    enableButtonPrev();
  });
  // посмотреть предыдущие
  buttonPrev.addEventListener('click', () => {
    renderPrevMonth();
    renderCalendar(0, NAVIGATION_FIRST);
    renderCalendar(1, NAVIGTION_SECOND);
    if (document.querySelector('.today')) {
      disableButtonPrev();
      disablePrevDays();
    }
  });
};

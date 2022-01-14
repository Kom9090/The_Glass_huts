export const dateState = {
  type: null,
  state: null,
  // обнуление точки отсчета
  setResetDay() {
    this.type = null;
    this.state = null;
  },
  // назначение точки отсчета и даты
  setFirstDay(date) {
    this.type = 'start';
    this.state = date;
  },
  // назначение точки отсчета и даты
  setLastDay(date) {
    this.type = 'last';
    this.state = date;
  },
  // сравнение дат
  compareDates(startDayOfMonth, lastDayOfMonth, daysArr, calendarBody) {
    if (this.type === 'start') {
      this.compareStartDay(startDayOfMonth, lastDayOfMonth, daysArr, calendarBody);
    } else if (this.type === 'last') {
      this.compareLastDay(startDayOfMonth, lastDayOfMonth, daysArr, calendarBody);
    }
  },
  compareStartDay(startDayOfMonth, lastDayOfMonth, daysArr, calendarBody) {
    const days = calendarBody.children;
    let checked = String(this.state.getDate());
    if (startDayOfMonth <= this.state && lastDayOfMonth >= this.state) {
      days[this.findIndexes(checked, daysArr)].classList.add('_checked');
    }
    if (startDayOfMonth > this.state && !document.querySelector('._checked')) {
      days[0].classList.add('_zero');
    }
  },
  compareLastDay(startDayOfMonth, lastDayOfMonth, daysArr, calendarBody) {
    const days = calendarBody.children;
    let checkedLast = String(this.state.getDate());
    if (startDayOfMonth <= this.state && lastDayOfMonth >= this.state) {
      days[this.findIndexes(checkedLast, daysArr)].classList.add('_checked-last');
    }
    if (lastDayOfMonth < this.state && !document.querySelector('._checked-last')) {
      days[0].classList.add('_last');
    }
  },
  findIndexes(element, daysArr) {
    return daysArr.indexOf(element);
  }
};

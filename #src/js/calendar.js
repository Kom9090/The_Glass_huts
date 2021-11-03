
//hide calendar
  const Calendar = document.querySelector(".calendar__wrapper");
  const close = document.querySelector(".calendar__hide");
  const searchBtn = document.querySelectorAll(".book__search");
  const bookDate = document.querySelectorAll(".book__date");
  

  close.addEventListener("click", () => {
      Calendar.classList.add("_hide-calendar");
  });

  searchBtn.forEach(function(item) {
      item.addEventListener("click", (e) => {
          e.preventDefault();
          for(let i = 0; i < bookDate.length; i++) {
              bookDate[i].classList.remove("_active-search");  
          }
          item.lastElementChild.classList.add("_active-search");
          if(Calendar.classList.contains("_hide-calendar")) {
            Calendar.classList.remove("_hide-calendar");
          } 
      });
  });



let nav = 0;

const calendar = document.querySelector('.days');

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.querySelector('.date__month').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'short' })} ${year}`;

  calendar.innerHTML = '';
 
  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');
    
    
    
    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      if (i - paddingDays === day && nav === 0) {
        daySquare.classList.add("today");
      }
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
  }
}

function renderNextMonth() {
  nav++;
  const calendarSecond = document.querySelector('.days-d');
  function loadSecond() {
      const dt = new Date();
    
      if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
      }
    
      const day = dt.getDate();
      const month = dt.getMonth();
      const year = dt.getFullYear();
      
      const firstDayOfMonth = new Date(year, month, 1);
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    
      document.querySelector('.month-d').innerText = 
        `${dt.toLocaleDateString('en-us', { month: 'short' })} ${year}`;
    
      calendarSecond.innerHTML = '';
     
      for(let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');
        
        
        if (i > paddingDays) {
          daySquare.innerText = i - paddingDays;
        
    
          if (i - paddingDays === day && nav === 0) {
            daySquare.classList.add("today");
          }
        } else {
          daySquare.classList.add('padding');
        }
    
        calendarSecond.appendChild(daySquare);    
      }
    }
    loadSecond();
}

function initButtons() {
  document.querySelector(".calendar__next").addEventListener('click', () => {
    load();
    renderNextMonth();
  });

  document.querySelector(".calendar__prev").addEventListener('click', () => {
    nav--;
    function loadM() {
        nav--;
        const dt = new Date();
      
        if (nav !== 0) {
          dt.setMonth(new Date().getMonth() + nav);
        }
      
        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();
        
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
      
        document.querySelector('.date__month').innerText = 
          `${dt.toLocaleDateString('en-us', { month: 'short' })} ${year}`;
      
        calendar.innerHTML = '';
       
        for(let i = 1; i <= paddingDays + daysInMonth; i++) {
          const daySquare = document.createElement('div');
          daySquare.classList.add('day');
          
          
          
          if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
      
            if (i - paddingDays === day && nav === 0) {
              daySquare.classList.add("today");
            }
          } else {
            daySquare.classList.add('padding');
          }
      
          calendar.appendChild(daySquare);    
        }
      }
    function renderNextMonthm() {
        nav++;
        const calendarSecond = document.querySelector('.days-d');
        function loadSecond() {
            const dt = new Date();
          
            if (nav !== 0) {
              dt.setMonth(new Date().getMonth() + nav);
            }
          
            const day = dt.getDate();
            const month = dt.getMonth();
            const year = dt.getFullYear();
            
            const firstDayOfMonth = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            });
            const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
          
            document.querySelector('.month-d').innerText = 
              `${dt.toLocaleDateString('en-us', { month: 'short' })} ${year}`;
          
            calendarSecond.innerHTML = '';
           
            for(let i = 1; i <= paddingDays + daysInMonth; i++) {
              const daySquare = document.createElement('div');
              daySquare.classList.add('day');
              
              const dayString = `${month + 1}/${i - paddingDays}/${year}`;
              
              if (i > paddingDays) {
                daySquare.innerText = i - paddingDays;
              //   const eventForDay = events.find(e => e.date === dayString);
          
                if (i - paddingDays === day && nav === 0) {
                  daySquare.classList.add("today");
                }
              } else {
                daySquare.classList.add('padding');
              }
          
              calendarSecond.appendChild(daySquare);    
            }
          }
          loadSecond();
    }
    loadM();
    renderNextMonthm();
  });
}

load();
renderNextMonth();
initButtons();


//buttons search

const startDate = document.querySelector(".date-ceck-in");
const lastDate = document.querySelector(".date-ceck-up");
//onload first date
let options = { day: 'numeric', month: 'numeric', year: "numeric" };
let todayText = new Date().toLocaleString('en-us', options);


const dayArr = document.querySelectorAll(".day");

dayArr.forEach(function(item, index) {
    
        item.addEventListener("click", () => { 

            if (startDate.classList.contains("_active-search")) {

                for (let i = 0; i < dayArr.length; i++) {
                    dayArr[i].classList.remove("_checked");
                    item.classList.add("_checked");
                    startDate.textContent = `${item.textContent} ${document.querySelector('.date__month').textContent}`;
                }

                startDate.classList.remove("_active-search");
                lastDate.classList.add("_active-search");  

            }  else if (lastDate.classList.contains("_active-search")) {

                if (document.querySelector("._checked")) {

                    for (let x = 0; x < dayArr.length; x++) {
                        dayArr[x].classList.remove("_checked-up"); 
                    }
                    item.classList.add("_checked-up");
                    lastDate.textContent = `${item.textContent} ${document.querySelector('.date__month').textContent}`;
                    
                    Calendar.classList.add("_hide-calendar");  
                }
            }

        });
   
    
})
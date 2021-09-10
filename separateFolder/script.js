/*
Добрый день (утро, вечер, ночь в зависимости от времени суток)
Сегодня: Понедельник
Текущее время:12:05:15 PM
До нового года осталось 175 дней

*/


function countTime(deadLine) {
    const showHours = document.querySelector('#hours'),
          showMinutes = document.querySelector('#minutes'),
          showSeconds = document.querySelector('#seconds'),
          showNoon = document.querySelector('#noon'),
          showGreteng = document.querySelector('.greting'),
          showDay = document.querySelector('#day'),
          showDaysTillNY = document.querySelector('#daysTillNY'),
          days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


    
    function getTimeRemaining() {
      const dateStop = new Date(`01 january ${deadLine}`).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            daysTillNY = Math.floor(timeRemaining / 60 / 60 / 24),
            seconds = new Date().getSeconds(),
            minutes = new Date().getMinutes(),
            hours = new Date().getHours(),
            day = new Date().getDay();
      return {daysTillNY, hours, minutes, seconds, day};      
    }

    function updateClock(){
      let clock = getTimeRemaining();
      let standartHours;
      if (clock.hours === 0) {
        showNoon.textContent = 'AM';
        showGreteng.textContent = 'Доброй ночи';
        standartHours = 12;
      } else if (clock.hours < 6) {
        showNoon.textContent = 'AM';
        showGreteng.textContent = 'Доброй ночи';
        standartHours = clock.hours;
      } else if (clock.hours >= 6 && clock.hours < 12) {
        showNoon.textContent = 'AM';
        showGreteng.textContent = 'Доброе утро';
        standartHours = clock.hours;
      } else if (clock.hours === 12) {
        showNoon.textContent = 'PM';
        showGreteng.textContent = 'Добрый день';
        standartHours = clock.hours;
      } else if (clock.hours > 12 && clock.hours < 18) {
        showNoon.textContent = 'PM';
        showGreteng.textContent = 'Добрый день';
        standartHours = clock.hours - 12;
      } else if (clock.hours >= 18 && clock.hours < 22) {
        showNoon.textContent = 'PM';
        showGreteng.textContent = 'Добрый вечер';
        standartHours = clock.hours - 12;
      } else {
        showNoon.textContent = 'PM';
        showGreteng.textContent = 'Доброй ночи';
        standartHours = clock.hours - 12;
      } 
      if (standartHours > 9) showHours.textContent = standartHours;
      else {
        showHours.textContent = '0' + standartHours;
      }
      if (clock.minutes > 9) showMinutes.textContent = clock.minutes;
      else {
        showMinutes.textContent = '0' + clock.minutes;
      }
      if (clock.seconds > 9) showSeconds.textContent = clock.seconds;
      else {
        showSeconds.textContent = '0' + clock.seconds;
      }
      showDay.textContent = days[clock.day];
      showDaysTillNY.textContent = clock.daysTillNY;

    }

    setInterval(updateClock, 1000);

    // if(getTimeRemaining().timeRemaining > 0) {
    //     setInterval(updateClock, 1000);
    //   } else {
    //     timerHours.textContent = '00';
    //     timerMinutes.textContent = '00';
    //     timerSeconds.textContent = '00';
    //     timerNumbers.style.color = 'red';
    //   }
  }

  countTime('2022');


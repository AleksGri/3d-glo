function countTimer(deadLine) {
  const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds'),
        timerNumbers = document.querySelector('.timer-numbers');

  function getTimeRemaining() {
    const dateStop = new Date(deadLine).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor(timeRemaining / 60 % 60),
          hours = Math.floor(timeRemaining / 3600);
    return {timeRemaining, hours, minutes, seconds};      
  }

  function updateClock(){
    let timer = getTimeRemaining();
    clockPrinter(timerHours, timer.hours);
    clockPrinter(timerMinutes, timer.minutes);
    clockPrinter(timerSeconds, timer.seconds);
  }

  function clockPrinter(element, value){
    if (value > 9) element.textContent = value;
    else {
      element.textContent = '0' + value;
    }
  }

   if(getTimeRemaining().timeRemaining > 0) {
     updateClock();
     setInterval(updateClock, 1000);
  } else {
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
    timerNumbers.style.color = 'red';
  }
}

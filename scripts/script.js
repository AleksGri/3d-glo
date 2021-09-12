window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  //Timer
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

  countTimer('13 september 2021');

  //Menu
  function toggleMenu(){

    const buttonMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeMenuBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li');

    const menuHandler = function() {
      if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
        menu.style.transform = 'translate(0)';
      } else {
        menu.style.transform = 'translate(-100%)';
      }
    };
    
    buttonMenu.addEventListener('click', menuHandler);

    closeMenuBtn.addEventListener('click', menuHandler);

    menuItems.forEach((elem) => elem.addEventListener('click', menuHandler));
  }

  toggleMenu();

  function togglePopUp() {

    const popupBtn = document.querySelectorAll('.popup-btn'),
          popupWindow = document.querySelector('.popup'),
          popupCloseBtn = document.querySelector('.popup-close');

    const popupHendler = function() {

      const popAnimation = function (opacity, displayValue){
        popupWindow.style.opacity = `${opacity}%`;
        function initiateTimeOut() {
          setTimeout(function() { opacityChanger();}, 50);
        }

        function opacityChanger() {
          if(displayValue === 'block') {
            popupWindow.style.display = displayValue;
            opacity += 10;
            popupWindow.style.opacity = `${opacity}%`;
            if (opacity < 100) {
                initiateTimeOut(); 
            }

          } else {
            opacity -= 10;
            popupWindow.style.opacity = `${opacity}%`;
            if (opacity > 0) {
                initiateTimeOut(); 
            } else {
              popupWindow.style.display = displayValue;
            }
          } 
        }
        initiateTimeOut();
      };


      const popAnimation1 = function (position, displayValue){
        popupWindow.style.top = `${position}%`;
        function initiateTimeOut() {
          setTimeout(function() { positionChanger();}, 50);
        }

        function positionChanger() {
          if(displayValue === 'block') {
            popupWindow.style.display = displayValue;
            position += 10;
            popupWindow.style.top = `${position}%`;
            if (position < 10) {
                initiateTimeOut(); 
            }
          } else {
            position -= 10;
            popupWindow.style.top = `${position}%`;
            if (position > -100) {
                initiateTimeOut(); 
            } else {
              popupWindow.style.display = displayValue;
            }
          } 
        }
        initiateTimeOut();
      };


      if(!popupWindow.style.display || popupWindow.style.display === 'none') {
        if(screen.width < 768) {
          popupWindow.style.display = 'block';  
        } else {
          popAnimation(0, 'block');
          popAnimation1(-100, 'block');
        }
      } else {
        if(screen.width < 768) {
          popupWindow.style.display = 'none';
        } else {
          popAnimation(100, 'none');
          popAnimation1(10, 'none');
        }
      }
    };

    popupBtn.forEach((button) => button.addEventListener('click', popupHendler));

    popupCloseBtn.addEventListener('click', popupHendler);

  }

  togglePopUp();

});
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

    const menu = document.querySelector('menu'),
          main = document.querySelector('main');

    const menuHandler = function() {
      if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
        menu.style.transform = 'translate(0)';
      } else {
        menu.style.transform = 'translate(-100%)';
      }
    };

    main.addEventListener('click', (event)=>{
      let target = event.target;
      target = target.closest('.menu');
      
      if(target) {
        menuHandler();
      } else {
        let target = event.target;
        target = target.closest('menu');

        if (!target && menu.style.transform === 'translate(0px)') {
          menuHandler();
        } 
      }
    });

    menu.addEventListener('click', (event)=>{
      let target = event.target;

      if(target.classList.contains('close-btn')) {
        menuHandler();
      } else {
        console.log(target);
        target = target.closest('li');
        console.log(target);
        if (target) {
          console.log("target");
          menuHandler();
        }
      }
    });
  }

  toggleMenu();

  //PopUp

  function togglePopUp() {

    const popupBtn = document.querySelectorAll('.popup-btn'),
          popupWindow = document.querySelector('.popup');

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

      if(!popupWindow.style.display || popupWindow.style.display === 'none') {
        if(window.innerWidth < 768) {
          popupWindow.style.display = 'block';  
        } else {
          popAnimation(0, 'block');
        }
      } else {
        if(window.innerWidth < 768) {
          popupWindow.style.display = 'none';
        } else {
          popAnimation(100, 'none');
        }
      }
    };

    popupBtn.forEach((button) => button.addEventListener('click', popupHendler));

    popupWindow.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        popupHendler();
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          popupHendler();
        }
      }
    });
  }

  togglePopUp();

  //Tabs

  const tabs = () => {

    const tabHeader = document.querySelector('.service-header'),
          tabs = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
          tabHeader.addEventListener('click', (event) => {

            let target = event.target;
            target = target.closest('.service-header-tab');

            const toggleTabContent = (index) => {
              for(let i = 0; i < tabContent.length; i++) {
                if (i === index) {
                  tabContent[i].classList.remove('d-none');
                  tabs[i].classList.add('active');
                } else {
                  tabContent[i].classList.add('d-none');
                  tabs[i].classList.remove('active');
                }
              }
            };
            
            if(target) {
              tabs.forEach((item, i) => {
                if(item === target) {
                  toggleTabContent(i);
                }
              });
            }
          });
  };

  tabs();

});
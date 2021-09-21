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

    popupCloseBtn.addEventListener('click', popupHendler);

  }

  togglePopUp();

  //Slider

  const slider = () => {

    const slide = document.querySelectorAll('.portfolio-item'),
          btns = document.querySelectorAll('.portfolio-btn'),
          slider = document.querySelector('.portfolio-content'),
          portfolioDots = document.querySelector('.portfolio-dots');

    let currentSlide = 0,
        dot,
        interval;

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlay = () => {

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if(currentSlide >= slide.length) {
        currentSlide = 0;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlay, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    const addDots = () => {
      
      slide.forEach(() => {
        const elem = document.createElement('li');
        elem.classList.add('dot');
        portfolioDots.append(elem);
      });
      dot = document.querySelectorAll('.dot');
      dot[0].classList.add('dot-active');

    };

    slider.addEventListener('click',(event)=>{
      event.preventDefault();

      let target = event.target;

      if (target.matches('.portfolio-btn, .dot')) {
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
        if (target.matches('#arrow-right')) {
          currentSlide++;
        } else if (target.matches('#arrow-left')) {
          currentSlide--;
        } else {
          dot.forEach((elem, index) => {
            if (elem === target) {
              currentSlide = index;
            }
          });
        }
        if(currentSlide >= slide.length) {
          currentSlide = 0;
        }
        if(currentSlide < 0) {
          currentSlide = slide.length - 1;
        }
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
      }

    });

    slider.addEventListener('mouseover', (event) => {

      let target = event.target;

      if (target.matches('.portfolio-btn, .dot')) {
        stopSlide();
      }

    });

    slider.addEventListener('mouseout', (event) => {

      let target = event.target;

      if (target.matches('.portfolio-btn, .dot')) {
        startSlide(1500);
      }

    });

    





    addDots();
    startSlide(1500);

  };

  slider();
});
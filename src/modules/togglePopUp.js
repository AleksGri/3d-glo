function togglePopUp() {

  const popupBtn = document.querySelectorAll('.popup-btn'),
        popupWindow = document.querySelector('.popup'),
        popupForm = popupWindow.querySelector('#form3');

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
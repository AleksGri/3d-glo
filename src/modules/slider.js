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
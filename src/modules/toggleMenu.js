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

export default toggleMenu;
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

export default tabs;
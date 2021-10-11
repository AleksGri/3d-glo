const forms = () => {

  const validator = (type, value, name) => {
    switch (type) {
      case 'text':
        if(name === 'user_name') {
          value = value.replace(/[^а-яё IVXL\-]/ig, '');
          return value;
        } else {
          value = value.replace(/[^а-яё ,!?\d\-\.]/ig, '');
          return value;
        }     
      case 'email':
        let email = value.replace(/[^a-zA-Z0-9_\-@.]/ig, '');
        return email;
      case 'tel':
        let phone = value.replace(/[^0-9+]/g, '');
        return phone;
    }
  };

  const formHeandler = (event) => {
    let target = event.target;
      let type = target.type;
      let value = target.value;
      let name = target.name;
      target.value = validator(type,value,name);
  };

  const fieldReplacer = (event) => {
    let target = event.target;
    let type = target.type;
    let value = target.value;
    let name = target.name;
    if (type === 'text') {
      value = value.replace(/ {1,}/g,' ').trim();
      value = value.replace(/\-{2,}/g,'-');
      target.value = value;
    }
    if (name === 'user_name') {
      value = value.toLowerCase();
      let nameArr = value.split(' ');
      value = '';
      nameArr.forEach((str)=>{
        str = str[0].toUpperCase()+str.substring(1);
        value += str + ' ';
      });
      value = value.trim();
      target.value = value;
    }
    if (type === 'tel') {
      const template = /[\D]{,11}/;
      if (template.test(value)) {
        console.log(target.value);
        target.value = ' ';
      }
    }

      value = value.replace(/ {1,}/g,' ').trim();
      value = value.replace(/\-{2,}/g,'-');
      target.value = value;
    

  };

  // sent-ajax-form
  const postData = (body) => {
    return fetch('./server.php', {
                    method: 'POST',
                    headers: {'Content-Type': 'Application/json'},
                    body: JSON.stringify(body)
                });
  };

  const formSender = (event, element) => {
    event.preventDefault();

    const errorMesssage = 'Что-то пошло не так...',
          loadMessage = 'Загрузка...',
          succsessMessage = 'Спасибо!!! Мы скоро с Вами свяжемся...',
          statuseMessage = document.createElement('div'),
          formData = new FormData(element),
          body = {};
    
    statuseMessage.style.color = '#fff';
    element.append(statuseMessage);

    formData.forEach((val, key) => {
      body[key] = val;
    });

    statuseMessage.textContent = loadMessage;

    postData(body)
    .then((response)=>{
            if (response.status !== 200) {
              throw new Error('Network status is not 200');
            }
            statuseMessage.textContent = succsessMessage;
          })
    .catch((error)=>{
            statuseMessage.textContent = errorMesssage;
            console.error(error);
          })
    .finally(()=>{
            element.reset();
            setInterval(()=>{
              statuseMessage.remove();
            }, 3000);
          });
  };


  const body = document.querySelector('body');

  body.addEventListener('input', (event)=>{
    let target = event.target;
    target = target.closest('form');
    if(target) {
      formHeandler(event);
    }
  });

  body.addEventListener('change', (event)=>{
    let target = event.target;
    target = target.closest('form');
    if(target) {
      fieldReplacer(event);
    }
  });


  body.addEventListener('submit', (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest('form');
    
    target.childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.background = '#ffffff';
    target.childNodes[1].childNodes[1].childNodes[3].childNodes[1].style.background = '#ffffff';
    target.childNodes[1].childNodes[1].childNodes[5].childNodes[1].style.background = '#ffffff';
    
    if (target.childNodes[1].childNodes[1].childNodes[1].childNodes[1].value === '') {
      target.childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.background = '#de9a8e';
      return;
    }
    if (target.childNodes[1].childNodes[1].childNodes[3].childNodes[1].value === '') {
      target.childNodes[1].childNodes[1].childNodes[3].childNodes[1].style.background = '#de9a8e';
      return;
    }
    if (target.childNodes[1].childNodes[1].childNodes[5].childNodes[1].value === '') {
      target.childNodes[1].childNodes[1].childNodes[5].childNodes[1].style.background = '#de9a8e';
      return;
    }

    fieldReplacer(event);
    formSender(event, target);
  });
};

export default forms;
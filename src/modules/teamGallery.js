const teamGallery = () =>{
    const galery = document.getElementById('command');
    let replacedImg;

    galery.addEventListener('mouseover', (event)=>{
      let target = event.target;
      target = target.closest('.command__photo');
      if(target) {
        replacedImg = target.src;
        target.src = target.dataset.img;
      }
    });

    galery.addEventListener('mouseout', (event)=>{
      let target = event.target;
      target = target.closest('.command__photo');
      if(target) {
        target.src = replacedImg;
        replacedImg = null;
      }
    });
  };

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
        calcTypeValue = calcBlock.querySelector('.calc-type'),
        calcSquareValue = calcBlock.querySelector('.calc-square'),
        calcCountValue = calcBlock.querySelector('.calc-count'),
        calcDayValue = calcBlock.querySelector('.calc-day'),
        totalValue = calcBlock.querySelector('#total');

  const countSum = () => {
    let total = 0;
    const calcSquare = calcSquareValue.value,
          calcCount = calcCountValue.value,
          calcDay = calcDayValue.value,
          calcType = +calcTypeValue.options[calcTypeValue.selectedIndex].value;

    if (calcType && calcSquare ) {
      total =  calcType*calcSquare*price;
    }

    if (calcCount > 1 ) {
      total *= 1 + (calcCount - 1)/10;
    }

    if (calcDay && calcDay < 5 ) {
      total *= 2;
    } else if (calcDay && calcDay < 10 ) {
      total *= 1.5;
    }

    totalValue.textContent = total;
  };

  calcBlock.addEventListener('input', (event)=>{
    let target = event.target;
    target = target.closest('.calc-item');
    if(target && !target.classList.contains('calc-type')) {
      target.value = target.value.replace(/\D/g, '');
    }
  });

  calcBlock.addEventListener('change', (event)=>{
    let target = event.target;
    if(target.tagName === 'INPUT' || target.tagName === 'SELECT') {
      countSum();
    }
  });
};

export default calc;
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var subtrair = document.getElementById('subtrair');
var adicionar = document.getElementById('adicionar');

function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
    while (currentNumber >= 0) {
    currentNumberWrapper.style.color = 'black';
    break;
  }
}

function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  while (currentNumber <= -1) {
    currentNumberWrapper.style.color = 'red';
    break;
  }
}

subtrair.addEventListener('click', decrement);
adicionar.addEventListener('click', increment);
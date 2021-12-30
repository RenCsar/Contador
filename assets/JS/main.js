var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var subtrair = document.getElementById('subtrair');
var adicionar = document.getElementById('adicionar');

function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

subtrair.addEventListener('click', decrement);
adicionar.addEventListener('click', increment);
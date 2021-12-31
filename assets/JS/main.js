var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0
var subtrair = document.getElementById('subtrair')
var adicionar = document.getElementById('adicionar')

subtrair.addEventListener('click', decrement)
adicionar.addEventListener('click', increment)

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  while (currentNumber >= 0) {
    currentNumberWrapper.style.color = '#f7a400';
    break
  }
  while (currentNumber >= 10) {
    adicionar.disabled = true
    break
  }
  while (currentNumber > -10) {
    subtrair.disabled = false
    break
  }
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber

  while (currentNumber <= -1) {
    currentNumberWrapper.style.color = 'red'
    break
  }

  while (currentNumber <= 10) {
    adicionar.disabled = false
    break
  }

  while (currentNumber <= -10) {
    subtrair.disabled = true
    break
  }
}
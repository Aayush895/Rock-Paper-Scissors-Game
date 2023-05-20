// Buttons list is a nodelist so we can iterate over it through 'forEach' method.
const getButtons = document
  .getElementById('available-choices')
  .querySelectorAll('.btn')
const result = document.getElementById('result').querySelector('h1')
const reloadPage = document.getElementById('reload');

getButtons.forEach((btn, index) => {
  btn.querySelector('img').addEventListener('click', (e) => {
    let choice = getComputerChoice()
    if (choice == 1) {
      choice = 'rock'
    } else if (choice == 2) {
      choice = 'paper'
    } else {
      choice = 'scissor'
    }

    if (e.target.getAttribute('alt') == choice) {
      result.innerHTML = 'Result: Draw!'
    } else if (e.target.getAttribute('alt') == 'rock' && choice == 'paper') {
      result.innerHTML = 'Result: You Lost!'
      const getScissor = document.getElementById('scissors-btn')
      getScissor.remove()
    } else if (e.target.getAttribute('alt') == 'scissor' && choice == 'paper') {
      result.innerHTML = 'Result: You Won!'
      const getRock = document.getElementById('rock-btn')
      getRock.remove()
    } else if (e.target.getAttribute('alt') == 'rock' && choice == 'scissor') {
      result.innerHTML = 'Result: You Won!'
      const getPaper = document.getElementById('paper-btn')
      getPaper.remove()
    } else if (e.target.getAttribute('alt') == 'scissor' && choice == 'rock') {
      result.innerHTML = 'Result: You Lost!'
      const getPaper = document.getElementById('paper-btn')
      getPaper.remove()
    } else if (e.target.getAttribute('alt') == 'paper' && choice == 'rock') {
      result.innerHTML = 'Result: You Won!'
      const getScissor = document.getElementById('scissors-btn')
      getScissor.remove()
    } else if (e.target.getAttribute('alt') == 'paper' && choice == 'scissor') {
      result.innerHTML = 'Result: You Lost!'
      const getRock = document.getElementById('rock-btn')
      getRock.remove()
    }

    reloadPage.querySelector('p').innerHTML = "Play Again?";
  })
})

reloadPage.addEventListener('click', () => {
  document.location.reload();
})

function getComputerChoice() {
  return Math.floor(Math.random() * getButtons.length) + 1
}

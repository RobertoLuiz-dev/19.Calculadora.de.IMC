const form = document.querySelector(`form`)
const inputWeigth = document.querySelector(`#weigth`)
const inputHeigth = document.querySelector(`#heigth`)

const modalWrapper = document.querySelector(`.modal-wrapper`)
const modalMessage = document.querySelector(`.modal-wrapper .modal-card .title span`)
const modalButtonClose = document.querySelector(`.modal-wrapper .modal-card button.close`)

function IMC(weigth, heigth) {
  return (weigth / ((heigth / 100) ** 2)).toFixed(2)
}

/*Input data validation function*/
function notANumber(value) {
  return isNaN(value) || value == ``
}

form.onsubmit = function(event) {
  event.preventDefault()
  
  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  /*Data validation logic in inputs*/ 
  const showAlertError = notANumber(weigth) || notANumber(heigth)
  if (showAlertError) {
    alertError.open()
    return;
  }
  alertError.close()
  
  const result = IMC(weigth, heigth)
  const message = `Seu IMC é de ${result}`
  
  modalMessage.innerText = message

 /*Run the calculation and display the message (also) by pressing the Enter key*/
  function pressEnterKey(event) {
    if (event.key === 'Enter') {
      modalMessage.innerText = message
    }
  }

  modalWrapper.classList.add(`open`)
}

/*Display error alert if input data does not pass validation*/
const alertError = {
  element: document.querySelector(`.alert-error`), 
  open() {
    alertError.element.classList.add(`open`)
  },
  close() {
    alertError.element.classList.remove(`open`)
  }
}

/*Restart the page when clicking the x button*/
modalButtonClose.onclick = function() {
  location.reload()
}

/*Close the modal by restarting the page (also) with the Esc key*/ 
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if(event.key === `Escape`) {
    location.reload()
  }
}

inputWeigth.oninput = function() {alertError.close()}
inputHeigth.oninput = function() {alertError.close()}
inputHeigth.oninput = function() {alertError.close()}
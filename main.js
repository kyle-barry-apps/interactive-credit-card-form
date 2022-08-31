// Import validation functions and card image updater functions

import { 
  validateCVCCode, 
  validateCardHolder, 
  validateCardNumber, 
  validateExpirationMonth, 
  validateExpirationYear } 
from "./scripts/validate.js"

import {
  updateCardCVCCodeImage,
  updateCardExpirationMonthImage,
  updateCardExpirationYearImage,
  updateCardHolderImage,
  updateCardNumberImage
} from "./scripts/imageUpdaters.js"

// Grabbing all the elements we'll need to change dynamically
// Error messages
const cardHolderError = document.querySelector('#cardholder-error')
const cardNumberError = document.querySelector('#cardnumber-error')
const cardExpirationMonthError = document.querySelector('#expiration-month-error')
const cardExpirationYearError = document.querySelector('#expiration-year-error')
const cardCVCError = document.querySelector('#cvc-error')

// Form data
const formContainer = document.querySelector('.form-container')
const formCompleteContainer = document.querySelector('.form-complete-container')
const cardHolderInput = document.querySelector('#cardholder')
const cardNumberInput = document.querySelector('#card-number')
const cardExpirationMonth = document.querySelector('#expiration-month-input')
const cardExpirationYear = document.querySelector('#expiration-year-input')
const cardCVC = document.querySelector('#cvc')
const submitButton = document.querySelector('#submit-button')

const validateRequiredFields = () => {
  const errorArray = [cardHolderError, cardNumberError, cardExpirationMonthError, cardExpirationYearError, cardCVCError]
  const fieldArray = [cardHolderInput, cardNumberInput, cardExpirationMonth, cardExpirationYear, cardCVC]

  const fieldEmpty = (field) => !field.value
  const errorExists = (error) => error.innerText

  if(!fieldArray.some(fieldEmpty) && !errorArray.some(errorExists)) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
    
}

// Submit event listener on form
formContainer.addEventListener('submit', (e) => {
  e.preventDefault()

  formContainer.style.display = 'none'
  formCompleteContainer.style.display = 'flex'
})

// Event listener for change to card holder
cardHolderInput.addEventListener('input', (e) => {
  const value = e.target.value
  const errorMess = validateCardHolder(value)
  updateCardHolderImage(value)

  if(errorMess) {
    cardHolderInput.classList.add('inputError')
    cardHolderError.innerText = errorMess
    cardHolderError.style.display = 'block'
    validateRequiredFields()
  } else {
    cardHolderInput.classList.remove('inputError')
    cardHolderError.innerText = ''
    cardHolderError.style.display = 'none'
    validateRequiredFields()
  }
})


cardNumberInput.addEventListener('keyup', (e) => {
  formatCardNumber(e)
})

// Event listener for change to card number
cardNumberInput.addEventListener('input', (e) => {

  const value = e.target.value
  const errorMess = validateCardNumber(value)
  updateCardNumberImage(value)
  
  if(errorMess) {
    cardNumberInput.classList.add('inputError')
    cardNumberError.innerText = errorMess
    cardNumberError.style.display = 'block'
    validateRequiredFields()
  } else {
    cardNumberInput.classList.remove('inputError')
    cardNumberError.innerText = ''
    cardNumberError.style.display = 'none'
    validateRequiredFields()
  }
})

// Event listener for change to expiration month
cardExpirationMonth.addEventListener('input', (e) => {

  const value = e.target.value
  const errorMess = validateExpirationMonth(value)
  updateCardExpirationMonthImage(value)

  if(errorMess) {
    cardExpirationMonth.classList.add('inputError')
    cardExpirationMonthError.innerText = errorMess
    cardExpirationMonthError.style.display = 'block'
    validateRequiredFields()
  } else {
    cardExpirationMonth.classList.remove('inputError')
    cardExpirationMonthError.innerText = ''
    validateRequiredFields()
  }
})

// Event listener for change to expiration yeаr
cardExpirationYear.addEventListener('input', (e) => {

  const value = e.target.value
  const errorMess = validateExpirationYear(value)
  updateCardExpirationYearImage(value)

  if(errorMess) {
    cardExpirationYear.classList.add('inputError')
    cardExpirationYearError.innerText = errorMess
    cardExpirationYearError.style.display = 'block'
    validateRequiredFields()
  } else {
    cardExpirationYear.classList.remove('inputError')
    cardExpirationYearError.innerText = ''
    validateRequiredFields()
  }
})

// Event listener for changes to cvc code
cardCVC.addEventListener('input', (e) => {

  const value = e.target.value
  const errorMess = validateCVCCode(value)
  updateCardCVCCodeImage(value)

  if(errorMess) {
    cardCVC.classList.add('inputError')
    cardCVCError.innerText = errorMess
    cardCVCError.style.display = 'block'
    validateRequiredFields()
  } else {
    cardCVC.classList.remove('inputError')
    cardCVCError.innerText = ''
    cardCVCError.style.display = 'none'
    validateRequiredFields()
  }
})


const formatCardNumber = (e) => {
  let value = e.target.value

   // keycode 8 is backspace, if the user hits backspace, we don't want to format
  if(e.keyCode === 8 || e.keyCode === 32) {
    return
  } else {
    // check to make sure the value is only made of digits or spaces before formatting
    if(value.match(/^[\s\d]+$/g)) {
      // remove all spaces from the value
      value = value.replace(/\s/g, '')
      // get new value array that breaks the string into chunks up to four items
      const newValueArray = value.match(/.{1,4}/g)
      // join the array with space between each chunk
      const newValue = newValueArray.join(' ')
      // set the value to the newly created value
      e.target.value = newValue
    }
  }
}
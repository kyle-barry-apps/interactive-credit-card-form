// Image updaters
const cvcCode = document.querySelector('.cvc-code')
const cardHolder = document.querySelector('.card-holder')
const expirationMonth = document.querySelector('#expiration-month')
const expirationYear = document.querySelector('#expiration-year')
const cardNumber = document.querySelector('.credit-card-number')


const updateCardHolderImage = (value) => {

  if (value.length > 3 && value.includes(' ')) {
    cardHolder.innerText = value
  } else {
    cardHolder.innerText = 'Jane Appleseed'
  }
}

const updateCardNumberImage = (value) => {
  const cleanValue = value.trim().split(' ').join('')

  if(cleanValue.length === 16) {
    setCardNumber(cleanValue)
  } else {
    setCardNumber('0000000000000000')
  }
}

const updateCardExpirationMonthImage = (value) => {
  if (value.length === 2) {
    expirationMonth.innerText = value
  } else {
    expirationMonth.innerText = '00'
  }
}

const updateCardExpirationYearImage = (value) => {
  if (value.length === 2) {
    expirationYear.innerText = value
  } else {
    expirationYear.innerText = '00'
  }
}

const updateCardCVCCodeImage = (value) => {

  if(value.length === 3) {
    cvcCode.innerText = value
  } else {
    cvcCode.innerText = '000'
  }
}


const setCardNumber = (value) => {
  const valueArray = new Array(value.slice(0,4), value.slice(4,8), value.slice(8,12), value.slice(12,16))
  const formattedValue = valueArray.join(' ')
  cardNumber.innerText = formattedValue
}

export {
  updateCardCVCCodeImage,
  updateCardExpirationMonthImage,
  updateCardExpirationYearImage,
  updateCardHolderImage,
  updateCardNumberImage
}
const validateCardHolder = (value) => {
  let errorMess = ''

  if(!value) {
    errorMess = "Can't be blank"
  } else {
    if(!value.match(/^[a-zA-z-\s.0-9']+$/g)) {
      errorMess = 'Name cannot contain special characters'
      return errorMess
    }

    if (value.length > 100) {
      errorMess = 'Cardholder name cannot be more than 100 characters'
      return errorMess
    }
  }

  return errorMess
}

const validateCardNumber = (value) => {
  let errorMess = ''

  const cleanValue = value.trim().split(' ').join('')

  if(!value) {
    errorMess = "Can't be blank"
  } else {
    if(!value.match(/^[\d\s]+$/g)) {
      errorMess = 'Wrong format, numbers only'
    }
    else if (cleanValue.length !== 16) {
      errorMess = 'Card number must be 16 digits'
    }
  }

  return errorMess
}

const validateExpirationMonth = (value) => {
  let errorMess = ''

  if(!value) {
    errorMess = "Can't be blank"
  } else {
    if(!value.match(/^[0-9]{2}$/g)) {
      errorMess = 'Month must be two digits'
    } else if (parseInt(value) > 12) {
      errorMess = 'Month must be 01-12'
    }
  }

  return errorMess
}

const validateExpirationYear = (value) => {
  let errorMess = ''

  if(!value) {
    errorMess = "Can't be blank"
  } else {
    if(!value.match(/^[0-9]{2}$/g)) {
      errorMess = 'Year must be two digits'
    }
  }
  return errorMess
}

const validateCVCCode = (value) => {
  let errorMess = ''

  if(!value) {
    errorMess = "Can't be blank"
  } else {
    if(!value.match(/^[0-9]{3}$/g)) {
      errorMess = 'CVC code must be three digits'
    }
  }

  return errorMess
}

export {
  validateCVCCode,
  validateCardHolder,
  validateCardNumber,
  validateExpirationMonth,
  validateExpirationYear
}
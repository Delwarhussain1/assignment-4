/**
 * please check my problems.Just give the problem input as a input and check the problem output is same or error in the code.
 */
// problem 1 solution is here
function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0) {
    return 'Invalid Input'
  } else if (income < expenses) {
    return 'Invalid Input'
  }
  const taxtableIncome = income - expenses
  const tax = taxtableIncome * 0.2
  return tax
}

// problem 2 solution is here
function sendNotification(email) {
  if (email.includes('@') === false) {
    return 'Invalid Email'
  }
  const separate = email.split('@')
  const notification = separate.join(' sent you an email from ')
  return notification
}
// problem 3 solution is here
function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'Invalid Input'
  }
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let chake of name) {
    if (numbers.includes(chake)) {
      return true
    }
  }

  return false
}
// problem 4 solution is here
function calculateFinalScore(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj) === true) {
    return 'Invalid Input'
  }
  if (obj.schoolGrade > 30) {
    obj.schoolGrade = 30
  }
  if (obj.testScore > 50) {
    obj.testScore = 50
  }
  let isFFamily = 0
  if (obj.isFFamily === true) {
    isFFamily = 20
  } else {
    isFFamily = 0
  }
  let totalScore = obj.testScore + obj.schoolGrade + isFFamily
  console.log(totalScore)
  if (totalScore >= 80) {
    return true
  } else {
    return false
  }
}
// problem 5 solution is here
function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) !== true ||
    typeof serialNumber !== 'number'
  ) {
    return 'Invalid Input'
  }
  let sumOfwaitingTimes = 0
  for (time of waitingTimes) {
    sumOfwaitingTimes = sumOfwaitingTimes + time
  }
  let avarageWaitingTime = Math.round(sumOfwaitingTimes / waitingTimes.length)
  let beforMe = serialNumber - 1 - waitingTimes.length
  let myWaitingTime = avarageWaitingTime * beforMe
  return myWaitingTime
}

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
const number = '9'
const numbers = [7, 8, 3, 4, 5]
const outout = waitingTime(numbers, number)
console.log(outout)

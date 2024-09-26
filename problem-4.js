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
// const number = 45
// const numbers = [45, 34, 23]
// const myObject = {
//   name: 'Rajib',
//   testScore: 65,
//   schoolGrade: 25,
//   isFFamily: false
// }
// const outout = calculateFinalScore(myObject)
// console.log(outout)

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
const nameChake = ['Raj']
let output = checkDigitsInName(nameChake)
console.log(output)

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
let tax = calculateTax(0, 1500)
console.log(tax)

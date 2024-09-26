function sendNotification(email) {
  if (email.includes('@') === false) {
    return 'Invalid Email'
  }
  const separate = email.split('@')
  const notification = separate.join(' sent you an email from ')
  return notification
}
const output = sendNotification('zihad@gmail.com')
console.log(output)

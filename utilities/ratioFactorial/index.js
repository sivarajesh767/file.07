const ratioOfTwoNumbers = require('../factorial/index.js')
const factorialOfNumbers = require('../ratio/index.js')

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2)
  const factorial = factorialOfNumbers(num3)
  return {ratio, factorial}
}

module.exports = ratioAndFactorial

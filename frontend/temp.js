const today = new Date(Date.now())
const iat = 1726320223
const exp = 1728912223
const date = new Date(exp*1000)
console.log(today.toUTCString())
console.log(date.toUTCString())
// console.log(x)
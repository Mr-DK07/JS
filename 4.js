// dataconversion

let score = "33abc" //NaN
//let score = null // O
//let score = undefined // NaN(not a number)
//let score = true // 1, false = 0

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoggedIn = 1 // 1= true, 0= false, "" = false, "DK"= true
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
const name = 'Tom'

//  what is your age
const myAge = 41

//   how many early years to account for
const earlyYears = 2

let laterYears = myAge - earlyYears
// console.log(laterYears)

//  conversion for later years in dog years
const laterYearsConversion = 4

// conversion for early years in dog years
const earlyYearsConversion = 10.5

//  your age in dog years
let myAgeDogYears = (earlyYears * earlyYearsConversion) + (laterYears * laterYearsConversion)

console.log(`My name is ${name}. I am ${myAge} years old in human years which is ${myAgeDogYears} years old in dog years.`)
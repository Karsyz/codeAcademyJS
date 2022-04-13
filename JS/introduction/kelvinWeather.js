//  given temperature in Kelvin
const tempKelvin = 0
//  convert kelven to celsius
let tempCelsius = tempKelvin - 273.15
//  convert kelven to fahrenheit rounded down to nearest whole number
let tempFahrenheit = Math.floor((tempCelsius * (9/5)) + 32)

console.log(`The temperature is ${tempFahrenheit} degrees Fahrenheit.`)


let tempNewton = Math.floor(tempCelsius * (33/100))
console.log(tempNewton)


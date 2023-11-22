const num = 1526345.46
const num1 = new Number(-584965)

console.log(num.toPrecision(4))
console.log(num.toFixed())

console.log("****************************")
console.log(Math.abs(num1))     // +ve
console.log(Math.floor(num))    //1526345
console.log(Math.ceil(num))     //1526346
console.log(Math.round(num))    // can be floor or ceil
console.log(Math.min(4,9,58,0,-6))

// Math.random

console.log(Math.random()) // random value between 0 to 1
console.log(Math.random()*10 + 1) 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)+min))

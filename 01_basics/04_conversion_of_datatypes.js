let score = "33"
console.log(typeof(score))
let scoreInNumber= Number(score)
console.log(typeof scoreInNumber)
console.log(scoreInNumber)

console.log("***************************")

 let over = "33abc"
 let overInNumber= Number(over)
 console.log(typeof(overInNumber))
 console.log(overInNumber)  // it will show NaN(not a number) because over is not actual number

 /**
  * "33" => 33
  * "33abc" => NaN
  * true => 1
  * false => 0
  */
 console.log("***********************")

 let isLoggedIn=0
 let boolLoggedIn=Boolean(isLoggedIn)
 console.log(boolLoggedIn)


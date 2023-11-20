"use strict"; //treat all js code as newer version(not necessary to write explicitly)
// alert(3+3)  // we are using nodejs, not browser so it will not display anything bcz alert is available only on browser

console.log(3+3)

let age = 26;
let nm="mahendra"
let roll=null
let isloggedIn=true

// typeof => to check datatype

/** ## Primitive Data Types(Value Type)
 * 1: Number
 * 2: bigint
 * 3: string = ""
 * 4: boolean => true/false
 * 5: null =>it is a datatype javascript (actually it is a standalone value)
 * 6: undefined => value is not assigned yet
 * 7: symbol => for uniquess it will use mostly i.e in react
 */

console.log(typeof nm)
console.log(typeof roll)
console.log(typeof undefined)

console.log("*************")
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id===id2)

/**## Non-Primitive datatype(Refrence type)
 * 1: Array
 * 2: Objects
 * 3: Functions
 */

const marvel = ["ironman", "hulk", "thor", "captain Marvel"]

let myObj = {
    name:"mahndra",
    age:"26"
}

const myFunction = function(){
    console.log("Hello Javascript")
}

console.log(typeof marvel)
console.log(typeof myObj)
console.log(typeof myFunction)

const name="Mahendra"
const count=50;

console.log(`Hello my name is ${name} and my repo count is ${count}`);


const game= new String('Pubg')
/**
 * this is the best way to declear string because this will
 * provide inbuild functionality and properties 
 * i.e length,trim,toUppercase
 */


console.table([game[0],game.length, game.toUpperCase(), game.indexOf('b')])

// #substring()
const newstr = game.substring(0,3)
console.log(newstr)

// # slice()
// -ve value start from end 
const revstr = game.slice(-4,3)
console.log(revstr)

// #trim()
// trim is use to remove starting and ending space 
// trimStart(), trimEnd()

// #replace()
const url = "https://localhost/mahendra%20kumar"
console.log(url.replace('%20','-'))

// #include()
// for find in string


// #split()

 
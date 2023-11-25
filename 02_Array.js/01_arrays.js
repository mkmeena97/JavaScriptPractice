/** # Array(non-primitive datatype)
 *    - Javascript Arrays are resizeable and can contain a mix of different data type.
 *    - javascript array-copy-operations create shallow copies rather then deep copy.
 *    - 
 */

const myArr = [5,8,6,4,9,0,1]
// console.log(myArr[2])

const newArr = new Array(6,8,5,7)
// console.log(newArr[1]);

newArr.push(23);
// console.log(newArr);

newArr.pop();
// console.log(newArr)

newArr.unshift(9)      // value will add at the first place
// console.log(newArr);

newArr.shift()         // it will remove first element
// console.log(newArr)

// console.log(newArr.includes(6))
// console.log(newArr.indexOf(7));

const newArr1 = myArr.join();       //it will convert array into string (coma seperated)
// console.log(newArr1)
// console.log(typeof newArr1)

// Slice & Splice
console.log("A", newArr)

const myn1 = newArr.slice(1,4)       // it will not change the original array
// console.log(myn1)
// console.log("B", newArr)

const myn2 = newArr.splice(1,4)      // it will remove required values from original Array (original array will change )
// console.log(myn2)
// console.log("C", newArr)


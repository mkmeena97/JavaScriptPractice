// starts from 1 jan 1970
// Temporal api is use for date and time(in future)
let myDate = new Date();
//console.table([myDate.toString(), myDate.toDateString(), myDate.toLocaleString(), myDate.toTimeString()]);
console.log(typeof myDate);


let myCreatedate = new Date(2023,10,25)
//console.log(myCreatedate.toDateString())

let today = Date.now();
console.log(myCreatedate.getTime())    // mili seconds
 
let newDate = new Date();
console.table([newDate.getDate(), newDate.getDay(), newDate.getFullYear(), newDate.getUTCDay()])
 console.log(newDate.toLocaleString('default',{
    weekday: "long"
    
 }))
let score = "45abc"

//number = number
//"90abc" = NaN
//if null is used here the value will be 0 
//in the case of undefined it will give the NaN(not a number)
//boolean = either 1 or 0
//string = NaN               

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber)


let IsLoggedIn = 1

let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => trule , 0 => false
// "" => false
// "gagan" =>  true

let someNumber = 45

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
let value = 3
let negValue = -value 

console.log(negValue) // simply gives negative value.


// arithematic operations

/*
2+2
2-2
2*2
2**2 => power
2/2
2%3 ==> modulo operator = modulous.
 */


// some tricky things 

let str1 = "hello"
let str2 =" Tarun"

let str3 = str1 + str2

console.log(str3) // hello tarun, simply strings koadd kar skte hai not minus(-).

// ab yahan trickyness aayegi.

// this is rules written in ecma script site par., string phele hai to uss hisab se coversion hoga
console.log("1" + 2) // ==> 12
console.log(1 + "2") // ==> 12
console.log("1" + 2 + 2) // ==> 122
console.log(1 + 2 + "2") // ==> 32 //string phele hai to uss hisab se coversion hoga

// specifically js k case mai iss par dependent na rahe, 

// console.log( 3 + 4 *5 / 6) ==> don't use this in REAL LIFE , only restircted to EXAMS 


// some special coversion, but ye sab nahi karna chahiye
// operator precedence only for EXAM
console.log(true); // gives true
console.log(+true); // gives 1 (possible)
console.log(true+); // gives ERROR
console.log(+""); // gives 0


let num1, num2, num3 // not a good code

num1 = num2 = num3 = 2+2  // not good way to write




// ASSIGNMENT
// prefix and postfix ==-> read on mdn reference
let gameCounter = 100
gameCounter++; // gives 101, usage k baad increment hoti hai
++gameCounter; // gives 101
console.log(gameCounter); // gives 101
// Numbers and Maps

const score = 400

console.log(score)  // gives 400, js automatically detect here iska number type ho

// here explictly defining type number, 100% guarantee it is a number

const balance = new Number(100)
console.log(balance);  // [Number: 100] telling it is a number, browser console mai kuch properities bhi dikhegi 


// METHODS 

console.log(balance.toString()); // convert our Number to String but o/p ==> 100.


console.log(balance.toString().length); //==> gives 3 length of 100.

console.log(balance.toFixed(2)); //==> gives 100.00. : toFixed(number: how many decimal you want)
// you are gonna use in e-commerce application, where gst calculations are there and etc.

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)) // use very carefully , jab pta hai ki decimal(.) se phele 3 hi digits hi aayenge tabhi ye use karna nahi to value galat aajayegi. 
// In above case it returns a string :==> 124.
// 23.8966 ==> 23.9
// differnt behavior, just be mindful while using this method.


const hundreds = 1000000
// zero dekhna difficult to see, In js some Methods to change representation of this.
// Comma lag jayenge, bydefault USA standard. You can change it: ('en-IN')
console.log(hundreds.toLocaleString()); // :==> 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // :==> 10,00,000


// MIN_VALUE, MAX_VALUE, MIN_SAFE_INTEGER, EPSILON, isFINITE ETC.


// +++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++
// BYDEFAULT aati hai maths library in JS


console.log(Math); // ye ek object with different properties and functions, you can see in Browser Console.

console.log(Math.abs(-4)); // just negative value becomes positive.

console.log(Math.round(4.3)); // :=> 4.3 ===> 4.

console.log(Math.ceil(4.2)); // :=> ceiling : zzraa sa bhi 4 se jayda hua to badi value choose karega i.e. 5. If ypu don't want this we have different function. i.e. :==> floor(), 4.9 ko bhi 4 hi lega ye.
console.log(Math.floor(4.2));

// Math.sqrt(25) ==> 5; Math.pow(5) ==> 25(instead of **), sin, tan, log , etc


console.log(Math.min(4, 5, 91, 2)); //:==> 2
console.log(Math.max(4, 5, 91, 2)); //:==> 91

// AAAP JAHAN MATH LIBRARY MOSTLY USED KARENGE.

console.log(Math.random()); //:==> BYDFAULT gives value between 0 to 1, like 0.3669522, 0.145555.

// aapke pass jo questions ya problem statemts aaynege kuch rane se kuch range mai values hongi. e.g: dice game yahan value 1 se 6 ki range hogi, ya koi or game bnao game mai 1 to 10.


console.log((Math.random()*10)); //now it gives 0 to 10 values and to resolving 0, not coming we add +1.
console.log((Math.random()*10) + 1); // now it gives always 1 to 10, but with decimal values.
console.log(Math.floor(Math.random()*10) + 1); // Problem solved of decimals, gives lowest value


//TRICK FOR DEFINING MIN AND MAX., to getting values in a range

const min = 10
const max = 20

// FORMULA

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // min add kiya kyuki min value 10 to chahiye hi.


// we can do this for dice game from this formula.

const diceMin = 1;
const  diceMax = 6;

console.log(Math.floor(Math.random() * (diceMax - diceMin + 1)) +       min);
//                                      ye taki minimum value 0 na ho : ye min isiliye taki min 1 hi rahe 
// to verify this once please test this code, on your computer.




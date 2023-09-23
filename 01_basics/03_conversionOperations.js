// let score = 33

// let's know about the typeof this variable, but why we already know that?
// because ye to frontend par hai, but jab hum backend par kaam kar rahe hote hai,to humme nahi pta hai ye value kahan se aarahi hai, ya FORM se VALLUE aaimay be score mai string hai, or number nahoi hai ya fir object mai ho, NOT GAURANTEE KI KYA HOGI =======> LET'S TAKE an eg: hum ye friend-end request le rahe hai 
// const{score}=req.body, here no gaurantee.

// console.log(typeof score);
// console.log(typeof(score)); // as a method we can use typeof Also

// ab suppose ye value string mai aarahi hai, but humme value number chahiye to kya karenge
// let score = "33"
// let score = "33abc" // this is giving NaN(not a number), but here point is that it is coverting this in number, not giving any ERROR. and TYPE IS "NUMBER" ONLY
// let score = null // null ==> zero, but type iska "NUMBER" hi ara hai 
// let score = undefined // undefined ==> NaN, but type iska "NUMBER" hi ara hai
// let score = true // true ==> 1, but type iska "NUMBER" hi ara hai
let score = "Tarun" // string ==> NaN, but type iska "NUMBER" hi ara hai







// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score); // by this we can convert into number.
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
// Nan bhi ek special type hai, jo hum check kar skte hai, ye to nahi de raha koi,



let isLoggedIn = -466

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true , 0 ==>. false ; 456566, -5456(random number) ==> true

// "" ==> false, "tarun" ==> true

let someNumber = 452

let stringNumber = String(someNumber); // 452 ==> 452 output but is a STRING TYPE.

console.log(stringNumber)
console.log(typeof stringNumber)
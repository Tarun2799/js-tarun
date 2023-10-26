// umme jab bhi 'current context ko refer' karna hai, to this ka use karenge. And humara current contect in object is in the braces only, bahar jo bhi hai usse humara koi wasta ni hai. So to access any variable in that context i will use THIS. Context ka mtlb hai values vo variables kya kya HOLD karre hai isme {}scope. 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // kya hoga yahan? Pura object print hogya isse, means current context ye object hai pura.
    }

}

// user.welcomeMessage()
// user.username = "sam" // so that's why ye show hua welcome message mai kyuki humne , hardcode ni kiya "this" ka use kiya.
// user.welcomeMessage()

// OUTPUT
// hitesh , welcome to website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }



// ISSE kya hoga?
// console.log(this); yahn aayega empty {}, because we are running in the Global Node environment. But when you ru this in the browser it gives WINDOW Object (tabhi hum browser ke saare event capture kar paate hai : click hogya, form submit, hower etc.)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function chai(){
//     console.log(this);
// }

// chai()

// BY USING THIS: 'console.log(this)' , INSIDE A FUNCTION it is giving Some values. But in case of object it is giving us the object variables(values).

// <ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Getter/Setter],
//     atob: [Getter/Setter],
//     btoa: [Getter/Setter],
//     performance: [Getter/Setter],
//     fetch: [AsyncFunction: fetch],
//     crypto: [Getter]
//   }


// 2.

// function chai(){
//     let username = "hitesh"
//     // console.log(this); // same above values with this line only.
//     console.log(this.username); // Now it is giving : undefined.
// }

// chai()



// 3.

// const chai = function () { // Expression
//     let username = "hitesh"
//     console.log(this.username); // here also same in Function Expression: undefined.
// }



// ARROW FUNCTION

// const chai =  () => { // function keyword hta kar, '=>' ye lga diya.
//     let username = "hitesh"
//     console.log(this.username); // YAHAN bhi : undefined.
//     console.log(this); // BUT idhar: {} empty aya hai, not bahut sari values.
// }


// chai()




// basic arrow func: () =>  {}.

// you can hold an arrow function in a variable and take Parameters also:

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// 2.
// ANOTHER WAY(braces hta kar, return keybhi hta kar, ek hi line mai likh diya ): 'IMPLICIT RETURN', maine maan liya return khud se kyunki ek hi line ka statement hai.

// const addTwo = (num1, num2) =>  num1 + num2





// 3. REACT MAI KAFFI USE HOGA{IMPORTANT}
// const addTwo = (num1, num2) => ( num1 + num2 ) // paraenthesis mai return nahi likhna padha, but {} curly braces mai likhna padhta hai.


// PARENTESIS LGANE KA FAYDA , tab dikhta hai jab object return karna hai, confusion dur to karega hi ye. and agar direct: (nm1, num2) => {username: "tarun"} , ye object return hi nahi hoga: undefined aayega. so PARAENTHESIS use karne honge.

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// foreach()is a loop in array, kai baar ye sab use karenge to pta hona chahiye.
// myArray.forEach()
// myArray.forEach(function () {})
// myArray.forEach( () => {})
// myArray.forEach( () => ())




///// PRACTICE

const greetings = (username) => {

    console.log(`${username}, welcome to our community.`);

}

greetings("tarun");


const welcome = (username) => (console.log(`${username}, welcome to the batch.`))


welcome("Rajat");


const welcome1 = (username) => (`username: ${username}`)

// (welcome1("tj")), // jab PARANTHESIS KE ANDER call kiya to ERROR aya: RangeError: Maximum call stack size exceeded.
welcome1("TJ"); // jab mai is function ko call karra hoon to jo string return hori hai vo iss welcome1() ke ander aarri hai, or isko print karvaoonga tabhi to show hogi mujhe.
console.log(welcome1("TJ")); // username: TJ


const obj = () => ({username: "tarun", age: 24, gender: "male"})

console.log(obj()); // obj() mai value aai or maine usse print karvaliya.
/// => { username: 'tarun', age: 24, gender: 'male' }








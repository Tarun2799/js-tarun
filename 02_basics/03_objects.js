// singleton : jab constructor se object bnta hai and ye apni trah ka ek hi object hai. Jab dusri trah sebnaega to uske multiple instances bn jaate hai.
// Object.create : ye hi constructor se bnata hai.

// 2nd way to declare: object literals, ye singleton nahi bnta hai. or kch difference nahi hota dono declare mai.


const mySym = Symbol("key1") // SYMBOL ko add kar denge as a key, but isko DIRECT nahi kar skte as key , go look in object.


// const JsUser = {} bn gya object, ander key values hoti hai.

const JsUser = {
    name: "Hitesh", // bydefault system name ==> "name" aise process karta hai KEY ko and value koi bhi string , array , object jo mrzi.
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //agar direct mysym use karenge ho to jayega but uska TYPE symbol ni hoga(not unique), to BRACKET USE. SYNTAX
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // 2nd way to ACCESS object, Agar bina string ki trah kroge to ERROR dega.
// console.log(JsUser["full name"]) // isko dot(.) se access ni kar skte kuki space hai bich mai. seedha string dedi key mai
console.log(JsUser[mySym]) // SPECIAL CASE, no other way than bracket to access symbol and case above of full name also.
console.log(typeof JsUser[mySym]) // string


// changing object value

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) , by this you cannot propagate. Object.freeze(konsaobject{object name basically})
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser); // ye value propagate nahi hogi , but koi errror ni aayega. and see this //[Symbol(key1)]: 'mykey1'




// let's see add a function in object, JS mai function ko bhi variable ki trah use kar skte hai. No discrimination here.

JsUser.greeting = function(){ // function greeting(){}
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); //[Function (anonymous)] ye function ka refernce aya hai bs.


console.log(JsUser.greeting()); //And ye method hogya hai object literal ka, to parenthesis lga kar access kiya.  printing hone ke baad undefined ara hai , becoz return nahi kiya.
// Hello JS user
// undefined

console.log(JsUser.greetingTwo()); // same for this also, return ni kiya kyuki ek execution extra hota hai. isiliye undefined ata hai.
// Hello JS user, Hitesh
//undefined

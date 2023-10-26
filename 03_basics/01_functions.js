
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() execution  ,sayMyName ye refernce hai

// function addTwoNumbers(number1, number2){ // Parameter

//     console.log(number1 + number2);
// }


// addTwoNumbers(3,4) // ARGUMNETS.
// addTwoNumbers(3,"a") // 3a

// addTwoNumbers(3,null) // 3
// yahan checking karni chahiye above function mai ki ye data type number hai ya ni.

const result1 = addTwoNumbers(3, 5)

// console.log("Result: ", result); // undefind result ke ander, because humne function se return ni krri koi value just printing. but 8 bhi print to ayega hi.

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result // this result is in local scope
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // this result in global scope. and is different

console.log("Result: ", result); // this is not give undefined






function loginUserMessage(username){ //= "sam"){ // default name . ab isse if block mai kabhi jayenge hi nahi kyuki humesha sam rahegi.
    if(!username){  // username === undefined , agar username nahi to ye true hoga tab chlegi ye IF block
        console.log("PLease enter a username");
        return // becuase neeche ki value print na ho.
    }
    return `${username} just logged in` // String Interpolation
}

// loginUserMessage("hitesh") // not print alone by this, becoz we are not printing


// console.log(loginUserMessage("hitesh")) // jab name pass nahi karenge to yahan: undefined just logged in ata hai JS mai., but ye humne default value dekar handle karli hai.

// console.log(loginUserMessage("")) // o/p==>PLease enter a username
//undefined


// console.log(loginUserMessage("tarun"))// o/p ==> tarun just logged in


// shopping card style situation , rest pararmeter.



////////////////////////////////////////////////////////////////// NEXT VIDEO. 20:  ////////////////////////////////////////////////////////////////////////

// Situation: or trah ke parameter pass kar skte hai? 1. shopping cart ke ander user ADD karta hi rahta hai items and we don't know kitne add karega user unka price add karna hota hai( pta nahi hota no. of arguments aane vale hai), TO US HISAB SE PARAMETER SET KARNE HOTE HAI

// function calculateCartPrice(num1){
//     return num1
// } // yahn problem kaise solve kare, ki agar or value aajayeto, kyunki print to sirf first hi kar payega. EK REST OPERATOR HOTA HAI

// console.log(calculateCartPrice(200, 400, 100))




function calculateCartPrice(val1, val2, ...num1){ // yahn ... REST OPERATOR HAI(sabko ek sath ek ARRAY MAI MIL JAYEGA.), TO YE MULTPLE VALUE PASS HOGYI, FUNCTION MAI AND val1 = 200, val2 = 400, baki num1 mai chli jayegi values.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// depth aage padenge


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ // yahn function ko ni pta koonsa object aayega, to isiliye anyObject.username
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) , ye to thik hai problem tab aayrgi jab object mai prices likha ho price nahi to undefined aajyega op string mai And is trah ke methods ai TYPESAFETY check karni padhti hai, ki jo mai price extract kara hoon vo hai ya ni object mai or , vo anyobject ka datatypemobject hai bhi ya ni object. TO IF-ELSE KA USE KARNA HOGA ISME

// to hum direct OBJECT pass kar skte hai.
handleObject({
    username: "sam",
    price: 399
})


// AISe hi array bhi pass hojayega.
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
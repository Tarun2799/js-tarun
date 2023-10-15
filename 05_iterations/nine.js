// REDUCE method(callback fn). ye kaafi jgah use hoga , basically shopping cart mai.
// (value,index, array ye milti hai abhi bhi, sir ne bataya go and see kaise?)

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {      
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// SYNTAX: ACCUMULATOR = ye staring mai empty value hoti hai , humme declare karna padhta hai ki kya value deni hai. and comma lga kar hum 'callback function' ke baad uss value ko de skte hai hummne yahan vo value "0" di hai And ye bs INITIAL value hai, uske baad iss function ka result or jo hum return karre hai vo jayega ACCUMULATOR mai, isiliye shopping cart mia use karte hai isse.                                                                          CURENTVALUE = jo abhi arry ki value[jis par pointer hoga] chal rahi hai vo hogi isme.



const mytl = myNums.reduce( function (num, currval) { // num yahan accumulator hai.
    console.log(`${num} is accumulator and ${currval} is current value at which pointer is pointing.`);
    return (num+currval)
}, 3)
// here i didn't give any value it is taking it as "0", but we should give to avoids errors.
console.log(mytl)

// OP:
// 3 is accumulator and 1 is current value at which pointer is pointing.
// 4 is accumulator and 2 is current value at which pointer is pointing.
// 6 is accumulator and 3 is current value at which pointer is pointing.
// 9


// 2. sir notes, ARROW FUNCTION.

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)  // here, IMPLICIT returning

// console.log(myTotal);




// let's take an example of shopping cart as well.

// Array of objects.
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // yahan jo currentValue hogi vo hum kuch le skte hai, jaise yahan par vo OBJECT hai. // IMPLICIT return.

// const priceToPay = shoppingCart.reduce( function (p, obj){
//     return (p + obj);// why ERROR , bcoz i didn't use object key and op is : [object Object][object Object][object Object][object Object]
// }, 0)


const priceToPay = shoppingCart.reduce( function (p, obj){
    return (p+obj.price) // YAHAN DIRECT ADD KARDIYA , but reaklmlife projects we usually checks is this value is number type or not.
}, 0)


console.log(priceToPay);

// OP: 22996.
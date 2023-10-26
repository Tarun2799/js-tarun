// array

//const myArr = [1,2,3,4,5, true, "tarun"] // isme hai elements ye string , boolean , numbers etc kuch bhi rakh skte hai. you can store diff. ele in a single variable. JS array are resizeable. zero based indexing.


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]; // string type array
// console.log(myArr[1]); // sirf isi trah se access kar skte hai yahn, not with["one"] like this.

// becoz it is object.
const myArr2 = new Array(1, 2, 3, 4),
// yahan automatically square bracket aajyenge



// IMP: In js array copy operation create shallow copies. jo change karoonga original array mai hojayega.
//  shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.


// we have a property called: 'length' of array.



// Array methods

// myArr.push(6) // value add kardega last index mai simply.
// myArr.push(7)
// myArr.pop() // simply remove last index value

// myArr.unshift(9) // ye staring yani 0 index par ye 9 value insert hoga, or sari value shift karni padhi , kaaam bahut karna padega computer ko. bas dhyaan rakhe
// myArr.shift() // starting index se remove kar dega.


// questinaire methods
// console.log(myArr.includes(9)); // return type boolean : false
// console.log(myArr.indexOf(3)); // 3 index par hi hai, agar jo nahi hai value return -1.

// const newArr = myArr.join() // ye string type mai covert hogya

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);
// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //return a section of array , last ndex not included. 

console.log(myn1); //==> [1,2]
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // 
console.log("C ", myArr); // [0,4,5], original array changed.
console.log(myn2); // [1,2,3]

// difference : last index bhi included hai
// splice mai portion hi nikal jata hai pura
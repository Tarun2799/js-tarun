"use strict"; //treat all code as newer version, bydefault it is but ggo to use and agar ek baar staring mai likh diya isse to puri script mai koi keyword nahi hai to redo this.

// alert(3 + 2) //we are using nodejs, not browser => vaise we can write arithematic in alert

console.log( 3+ 
    3) // it will work, but code readability should be high.

console.log("Tarun")

let name = "Rajat"
let age = 23
let isLoggedIn = false
let state;

/*1. number => 
Safe integer range: -2^53 - 1 to 2^53 - 1 (inclusive)
Floating-point range: -2^1074 to 2^1024 (inclusive)

However, it is important to note that JavaScript numbers are always stored as double-precision floating point numbers, following the international IEEE 754 standard. This means that integers outside of the safe range will be stored as floating-point numbers, which can lead to inaccuracies in some cases.

const bigInt = 9007199254740992n;
console.log(bigInt);

bigInt++;
console.log(bigInt);


And Always use BigInt to store a large value.
The n suffix at the end of the bigInt variable indicates that it is a BigInt value.

It is important to note that the BigInt data type was introduced in ES2020 and is not supported by all browsers.


2. STRING  => ""(prefer) also work ''.

3. BOOLEAN => true/false
e.g. => server se response aaya hai ya nahi aya hai; user ki credit card details hai ya nahi; user login hai ya nahi hai.

4. NULL => standalone value
e.g. representation hai empty value ka but not means => let state = ""(not khali string), but yahan iska type defined hogya hai. 
=> let state = null => ab ye undefined nahi hai KHALI HAI
E.G. jab aapne kisi server se request bheji mujhe temperature btao? Maanlo server mai ek dikkat aagyi and nahi bhej pa raha or usne agar 0 bhej diya to vo ek temperature ki value hogi; to yahan NULL bhejna prefer hoga.

5. UNDEFINED => abhi koi value assign nahi hui hai.

6. SYMBOL => implementation more in react, to find UNIQUENESS in components in figma tools also


#1: ALL OF ABOVE IS PRIMITIVE DATA TYPE

#2 : this is non-primitive or referrence type (objects, arrays and function)
OBJECT =>


*/


console.log(typeof null); // null ek OBJECT TYPE HAI.
console.log(typeof undefined); // ye undefined ek type hi hai JS.


// go to MDN REFERENCES (mozilla) and original documentation is on => tc39.es website

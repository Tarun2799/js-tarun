// Let's see : HOW TO ITERATE OBJECT. by FOR-IN LOOP


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


console.log(myObject.js)
for (const value in myObject){
    // console.log(value);
}

// IT GIVEs KEY: o/p, by single variable
// js
// cpp
// rb
// swift


// Let's see how to extract VALUE FROM IT.
for (const value in myObject){
    // console.log(`this value ${myObject[value]} has this key- ${value} `) // myObject[key]: it is a syntax, 
    // objectname[]squarebrace(inside braces 'key'). 
    //  myObject.value : this SYNTAX not working. 
}


for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}



// FOR IN LOOP on ARRAY.

const programming = ["js", "rb", "py", "java", "cpp"]

for(const val in programming){
    // console.log(val); // op :  0 1 2 3 4, Array is also design like key-value, but BYDEFAULT key is "number" here.// YE SIRF "KEY" DEGA. i.e. Array ki key number hote hai
}

for (const key in programming) {
    console.log(programming[key]); // squarebrace is syntax here to access the iterator in (for-in) this loop.
}


// ITERATION ON MAP. 
//  here map is not iteratable, i.e. why not giving any value.

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }





// EXTRA WORK NOT OF THIS VIDEO LECTURE.

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh")) //from method: Creates an array from an iterable object.
// console.log(Array.from({name: "hitesh"})) 
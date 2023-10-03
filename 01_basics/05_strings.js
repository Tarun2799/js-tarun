//

// string concatenation


const name = "tarun"
const repoCount = 50

console.log(name + " " +repoCount + "Value");
// this concatenation SYNTAX is not good.


// STRING INTERPOLATION : backticks ``

// use in backend.
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

//==> string declaration: SYNTAX using object(key-value also in this.)

const gameName = new String('tarun-tj');

console.log(gameName[0]) // gives t

console.log(gameName.__proto__); // iski value(METHODS) CONSOLE of browser mai dikhega 

console.log(gameName.length); // 8

console.log(gameName.toUpperCase()); // NOT changing the original value, because of STACK.

console.log(gameName.charAt(2)); // It tells at what index , what is the charcter ==> r. charAt(index)

console.log(gameName.indexOf('t')); // It tells given character is at what index. ==> 0. indexOf('character')

// now more about METHODS OF STRINGS ==> IMPORTANT
// some times we have USE slice the string.

const newString = gameName.substring(0,4);  // ==> taru (first index inclusive, last index NOT included).
console.log(newString); // SUBSTRING MAI NEGATUVE VALUE USE NI HOTI


// SLICE : NEGATIVE VALUE USE HOJATI HAI ISME
const anotherString = gameName.slice(-8, -4); // ans == taru(-4 not included i.e. last index )
// t   a  r  u  n  -  t  j
// -8 -7 -6 -5 -4 -3 -2 -1

// sometimes input form mai extra spaces AAJATE  hai, to vo humme nahi chahiye . Let's see kya karenge

const newStringOne = "    tarun   ";
console.log(newStringOne); // gives     tarun   
console.log(newStringOne.trim()); // gives tarun :==> spaces removed.
// go to MDN DOCUMENTS: ==> only WHITE SPACES defined as white spaces characters and line terminators(\n).




// suppose aapke pass url aya :==> browers spaces in samjhta convert into %20(urln coding) 
// eg : "https://tarun.com/tarun%20jhamb"

const url = "https://tarun.com/tarun%20jhamb";

console.log(url.replace('%20','-'));


// questions bhi puch skte hai strings se .includes()

console.log(url.includes('tarun')); // tells true.

console.log(url.includes('rajat')); // tells false.


// ab is string ko array mai karna chata hoon, based on dash suppose alg separate hojaye.
// split() ek sepator and a limit.

console.log(gameName.split('-')); // It gives an array ['tarun', 'tj'];


// GO TO MDN WEBSITE:
// BLINK , BOLD , ENSWITH , COSNTRUCTOR, CHARACTER, FIX, ETC.
// PRACTICE. MORE AND MORE.



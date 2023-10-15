// little array specific loop
// for of


// ["", "", ""] ==> common scenario strings inside array we can iterate that, also OBJECTS.
// [{}, {}, {}]


/// ex 1:
const arr = [1, 2, 3, 4, 5]

for (const num of arr) { /// NUM is the iterator here, here 'arr'  is the OBJECT(means class-vala not object literals).This "for of" loop automatically detect where to end and start.
    // console.log(num);
}


for( const num of arr){ // for-of : 
    // console.log(num*2);
}
// 5
// 2
// 4
// 6
// 8
// 10


// ex 2: FOR-OF STRING
const greetings = "Hello world!"
// for (const greet of greetings) { // This loop "for of " can also be on the STRING.
    // console.log(`Each char is ${greet}`)
// }

const message = "Hey, there let's walk.";

for(const character of message){
    if(character != ' '){
    // console.log(`Each char of message is ${character}`);
    }
}



// Maps: datatype. array jaise but contain UNIQUE VALUES.

const map = new Map() // declaration, ye bhi ek OBJECT hai, that holds 'key-values' pair , MAP ORDER ko yaad rakhta hai. Object literal order yaad nahi rakhta.
map.set('IN', "India") // value setting KEY-VALUE.
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // will not repeat this.


// console.log(map);

// OUTPUT:
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }


// loop kaise lagega . Let's see
for(const value of map){
    // console.log(value);
}

// OUTPUT: gives an array of "key-value" pair. If a single variable you take.
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


for (const [key, value] of map) { // this is SYNTAX [key, value]: destructure of ARRAY.
    // console.log(key, ':-', value);
}

// IN :- India
// USA :- United States of America
// Fr :- France



// 3 for-of loop on object literal. Let's see:
const myObject = {
    game1: 'NFS', // "game1" : 'NFS': BY THIS ALSO NOT WORK.
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// TypeError: myObject is not iterable. FOR-OF NOT WORK HERE.










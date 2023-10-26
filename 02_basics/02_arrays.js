const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // yahan merge nahi honge, array ke ander array aagya, becoz array koi bhi type kaka data yahan lelta hai JS mai.
//o/p ==> ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"] (element number 4)]
// push existing array par hi push karta hai


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // isse 3 elemt ka phela elemnt aajyega


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// this concat returns new array.
// o/p ==>  [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



// SPREAD OPERATER:  EASY METHOD compare to caocat(GLASS SHATTERED)
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);




const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // rare case situation. In case

const real_another_array = another_array.flat(Infinity) // to solve above array ke ander array, return a new array everyone is in concat , yahan depth de skte hai, 2, 3... , but infinity dene se khud dekh lega.
console.log(real_another_array);



// sepcailly for data scrapping, jaise kahin or jgah se data aya webpage se to alg format mai ata hai, eg nodelist , objects, string but chahiye array kyuki us par loop karna hai


console.log(Array.isArray("Hitesh")) // pch skte hai array ya ni? false
console.log(Array.from("Hitesh")) // is string ko array bna diya: [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting: 
// [] empty, yahan bolna padega keys k bnaoun ya values ka.: nahi bna payega from agar array to empty array dega.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ], returns a new array from set of elements.

// Array.isArray() , learn this.





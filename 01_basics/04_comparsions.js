/*

NO PROBLEM IN SIMPLE COMPASIONS

console.log(2>1) // gives 1 means true in boolean 
2 >=1 ==> 1
2<1 ==> 0
2 == 1 ==> 0
2 != 1 ==>1
*/


// VALUE TO CLEAN CODE ==> AVOID THIS.
// problem comparisons mai tab aati hai ==> jab SAME DATATYPE KO COMPARE NAHI KARTE. let's see eg:

console.log( "2" > 1); // ==> true , means automatically js ne string koi nnumber mai convert kar diya
console.log( "02" > 1);

// problem YE HAI SOME TIMES PREDICTable result nahi aata hai,
// so, DON'T COMPARE DIFFRENT DATATYPES

// KABHI NULL == 0, NAN , NULL ETC , baar 
console.log( null > 0) // false ,  comparisons(null => 0) 0>0
console.log( null == 0) // false 
console.log( null >= 0) // true, because of value coversion problem 

// VERY IMPORTANT TO KEEP IN MIND WHILE USING JS.
// the reason is that an EQUALITY check == and COMPARSIONS < > >= <= works DIFFERNTLY. COMPARISONS covert NULL to number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.


// PROBLEM WITH UNDEFINED ALSO.

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

// ye pta hona, exam ke liye ana chahiye BUT YE PROJECTS KE, YE OR MEANINGFUL SAMJH MAI AAYEGA.



// STRICT CHECK ==> VALUE KE DATATYPE KO BHI CHECK KARTA == YAHAN PAR CONVERSION NAHI HOTA, SAME GIVEN VALUE KO HI CHECK KARTA HAI.




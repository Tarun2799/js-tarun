// Immediately Invoked Function Expressions (IIFE)
// jaise hi function likha turant hi involed karvana hai. but Kyu aisa function chahiye jo immediately execute hojaye?
// : => 1. kai baar hum ek file likhte hai jisame sirf database conection hai, or jaise hi application start ho and database ka connection immediately start hojaye{bas turant execute hojaye.}
// 2. Kai baar Global variable kuch declare kiye hote hai hum nahi chahte ki ye variables, kisi function ko pollute kare.(because ye function to use kar skta hai gobal variables){Global scope se Polluion nahi chahiye bikul bhi}

// "NOTE " : INTERVIEW MAI DONO ABOVE POINT BTANE HAI

function chai1(){
    console.log(`DB CONNECTED`);
}
chai1() // ye bhi immdiately invoke hogya hai, but hum chahte hai ki global variable se ye function POLLUTE NA HO atleat is variable mai to. TO HUM IIFE LIKH DETE HAI.


(function chai2(){
    console.log(`DB CONNECTED TWO`);
})();  
// yahan par FIRST parenthesis mai function definition hogya, and 2nd () is the EXECUTION of this IIFE. Like we call afunction name(), in this also ()is for the execution of name. 
// YE iife INVOKE TO HOGYA PAR IS iife KO NAHI PTA HAI CONTEXT KO KAHAN TAK  ROOKNA HAI, ISSE HUM 2ND iife SAME FILE MAI EXECUTE NAHI KAR PAYENGE, TO HUM HUM iiife KE BAAD SEMICOLON(';') USE KARTE HAI.

// OR HUM ARROW FUNCTION BHI USE KAR SKTE HAI, iife SYNTAX MAI.


// NAMED IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// UNNAMED IIFE.
(() => {
    console.log(`APP STARTS`);
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // OR AGAR VARIABLE PASSKARNA HOTA HAI FUNCTION MAI TO HUM () ISME HI KARTE HAI, TO YE HUMNE AISE HI KARDIYA 2ND () OF iife  MAI.



























































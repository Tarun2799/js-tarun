// CLOSURE bhi scope ke ander hi ata hai

// {}: jab ye function , if-else, LOOP ke saath ata to isse bola jata hai scope, but object ke case mai ye sirf syntax hai.


//var c = 300, ye block scope ko nahi manta
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // d = 40 // isme bhi var ki dikkat hai
    // console.log("INNER: ", a);
    
}



// console.log("OUTER: ",a); yhan 300 hi aayega , if ke ander ye 30aayega .


// console.log(b);
// console.log(c); yahan 30 print hojyega


// KEEP IN MIND: jo browser scope hota hai vo different hota hai coding environment vale Global scope JISKO NODE KE THROUGH RUN KRTE HAI ussse




////////////////////////////////////////////// NEXT VIDEO : //////////////////////////////


// NESTED SCOPE


// DIFFERENT USE-CASES: loop ke ander function, if-else ke ander function


function one(){ //sbse bda, 
    const username = "hitesh"

    function two(){ // child can access parent variables
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // isko access nahi kar skte kyunki website ander ander khatam hogya.

     two() // execution of two, ==>hitesh aagya

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++ , discussion further aage


console.log(addone(5))

function addone(num){ // basic function
    return num + 1
}



addTwo(5) // ERROR: yahan ye access ni kar paeyga , kyunki variable mai hai, PROBLEM AATI HAI KIS TYPE SE FUNCTION KO DECLARE KARTE HAI
// (HOISTING)

const addTwo = function(num){ // EXPRESSION
    return num + 2
}
// kunki js mai variable pwerful hote hai , kuch bhi hold kae lete hai.











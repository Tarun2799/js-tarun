// FOR-EACH LOOP. Kuch loops are there in array as methods. for-each is an example of this type.
//  It is HIGHER ORDER FUNCTION.

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){   
//     console.log(val);
// } )

// foreach( takes callback function ), yahan fun mai jo parameter hum bhejte the khud se ye foreach loop khus se jayega har item of array and function ke ander lekar aayega.(isko jo aapka mann kare vo name dijiye a/i/iteam etc.) And jo mrzi kijiye is value ke sath.

// CALLBACK function: 1. ka name nahi hota.



// 2.

// YOU CAN give arrow func also inside the foreach
// coding.forEach( (item) => {
//     console.log(item);
// } )


// 3. alg se function likh kar , pass kar skte hai inside foreach "funct_name"(only refernce of it. not execute this function inside the paranthesis )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// 4. different value comes in for each

coding.forEach( (item, index, arr)=> {  
    // console.log(item, index, arr);
} )

// op: this loop has three diff. access.(first variable is : VALUE, 2nd is: INDEX, and ARRAY itself.)
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


// 5. object inside array. we can use this extracting coming from backend kyuki array of objects ki form mai values aari hoti hai, from DATABASES. So, we can use FOR-EACh directly without thinking how to take object in normal for loop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {  // here item is OBJECT.
    
    console.log(item.languageName); //object.key = value.
} )


//op: javascript
// java
// python
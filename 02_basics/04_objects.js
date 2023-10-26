// const tinderUser = new Object()
const tinderUser = {}

console.log(tinderUser); // both gives same empty object {}

// upper vale mai add karre hai
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {  // this is also possible
    email: "some@gmail.com",
    fullname: { // ye ek object liya
        userfullname: { // ye bhi ek object, jitni bhi nesting mai ja skte hai.
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // ==> hitesh
// yahan optional chaining bhi aati hai ==> console.log(regularUser.fullname?.userfullname.firstname) , ye thoda protection de deta hai, jab api se response ata hai, to ye use karte hai, agar value aai hai to: nahi to if-else mushkil hoga yahan.




// objects can also combine like we did in arry.
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //, like objects ke ander objects aajayenge, PROBLEM  ==> 
// const obj3 = Object.assign({}, obj1, obj2, obj4), // Object.assign(TARGET{}, SOURCES(obj1, obj2, obj4))
//                     SYNTAX: is object mai , piche ke 3 objects add hojayenge.

// const obj3 = Object.assign(obj1, obj2, obj4) , ye bhi kar skte hai object one mai baki objects aajyenge and returns TARGET/SOURCE object. EMPTY isiliye lete hai kyunki kaffi objects ho skte hai 





// spread operator : glass shatter. USE ISI KO JAYDA KARENEGE.

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// SYNTAX : jab DATABASE SE VALUE AAYEGI. ARRAY OF OBJECTS. 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,},

        {
            id: 1,
            email: "h@gmail.com"
        }

    ]


users[1].email
// users[1] : array ka phela elemnt and dot lga kar isiliye access kiya kyunki vo ek object hai.

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //==> [ 'id', 'name', 'isLoggedIn' ], NOTICE HERE: iska datatype ARRAY(keys) milra hai, And iske upper lop lga kar kai jgah use kar skte hai.(database ke ander use hoga)


// console.log(Object.keys(objectName))
// jab aaap Object.method() run karoge to isse nahi pta koonsa object run karna chahte ho app, to object name btana hota hai


console.log(Object.values(tinderUser));
// [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser)); // less use
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ], HERE EVERY KEY-VALUE PAIR became an array.


// kai baar aap object mai loop through karre hai, or isse value nikalne ki koshish karre hai and vo exist hi nahi karti to CRASH hone ke chances hai*, 
// YA TO APP MAUALLLY SOLVE KARENGE , YA USSE PUCH BHI SKTE HAI LIKE THIS:
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // obvio BOOLEAN MAI RESULT aayega. : ==> true

console.log(tinderUser.hasOwnProperty('isLogged')); // false



// IMPORTANT METHODS CONSOLE MAI DEKH SKTE HAI AAP. FROM CONSOLE


// {1: 'a', 2: 'b'}
// 1
// : 
// "a"
// 2
// : 
// "b"
// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()







//////////////////////////////////////////////////////////////////////////////////////////////////
////// JSON AND OBJECT DESTRUCTRE



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor ,ye bi thik hai // agar baar baar isi ko print karvana ho to we have ANOTHER WAY : 


// const {courseInstructor} = course
// const {kiski value leni hai} = course(jahan/ jis object se value leni hai)
// isse console.log() mai dot lga kar value nahi likhni hogi, simple : console.log(courseInstructor) ==> hitesh.

 
const {courseInstructor: instructor} = course // apna new name bhi dediya courseInstructor: instructor bna diya humne.

// console.log(courseInstructor);
console.log(instructor); // hitesh op aayega yahan bhi.


// REACT MAI USE HOTA HAI: LIKE USME BASIC METHOD HAI: JUST UNDERSTANDING.
// props
const navbar = () => { // is parenthesis mai props.company type kuch ata hai to baar ye karne ki bjaye , iss parenthesis mai destructure kar dete hai : ({company})

}

// suppose aapne ek compny name diya isme
navbar(company = "tarun") 


// array destructure bhi hota hai same.


// MENUCARD is like a api documentation, 
// API: kuch value aati hai backend se usse kaise likhte hai aap. Phele ke time par XML mai aati thi jo comlpex tha. AB AATI HAI JSON mai.


// JSON : {} bs yahan iska koi name nahi hai.
// suppose like this: 
// { 
//     name: "hitesh", // yahan key bhi string to error dikha ra tha kyuki object ni hai kunki name hi hai iska.
//     coursename: "js in hindi",
//     price: "free"
// }

// { 
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } // true/ false direct aate hai value mai,  kyunki unka datatype alg hai


// kai baar api : ARRAY ki form mai bhi mil jaati hai. to fir usse array ki trah handle karnge .
[
    {},
    {},
    {}
]

// randomuserme : ek api hai.
// JSON FORMATER TOOL: to understand this, we can see it like TREE  etc.
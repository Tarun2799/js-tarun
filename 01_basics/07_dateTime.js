 // js date objects represent a single moment in time in a platform independent format
 // i jan, 1970 ( arbitrary)
 // date calculated hoti milli second mai , jab bhi date declare karenge to ek long string aayegi, vp milliseconds mai value hoti hai from 1 jan 1970 
 // go to tc39 on this organization website.

//  temporal object ko future mai global object bnane ka proposal chal raha hai, like math hai.
// To simple hojayega simple access karna 

let mydate = new Date()
console.log(mydate); // ==> 2023-10-04T06:29:02.834Z
// let's see hoe to use this.
// dekhte hai string mai convert hoga? kaisa hoga
console.log(mydate.toString()); 
// ==>  Wed Oct 04 2023 12:02:25 GMT+0530 (India Standard Time)

console.log(mydate.toDateString()); 
// Wed Oct 04 2023

console.log(mydate.toLocaleString());
// 10/4/2023, 12:05:11 PM

console.log(mydate.toJSON());
// 2023-10-04T06:36:35.941


const event = new Date('August 19, 1975 23:15:30 UTC');

const jsonDate = event.toJSON();

console.log(new Date(jsonDate).toUTCString());
// Tue, 19 Aug 1975 23:15:30 GMT


// TYPE OF DATE : OBJECT

console.log(typeof mydate); // object

// agar aapko koi specific date declare karni hai to vo bhi kar skte hai

let mycreatedDate = new Date(2023, 0, 23); // here 0 is the january.
console.log(mycreatedDate); // 2023-01-22T18:30:00.000Z
console.log(mycreatedDate.toDateString()); // Mon Jan 23 2023, monday automatically btaya

let mycreatedDate1 = new Date(2023, 0, 23, 5, 3); /// jab single likh rahe hai to, jan 0 se start because kyuki array use hora hai.
console.log(mycreatedDate1.toLocaleString()); // 1/23/2023, 5:03:00 AM
console.log(mycreatedDate1.toLocaleDateString()); // 1/23/2023, yahi ara jbki maine 5,3 bhi de rakha hai.


// ANOTHER FORMAT to write date.
// let mycreatedDate2 = new Date("2023-01-14"); // yy-mm-dd, is format mai karenge to month 01-jan se start hoga.
let mycreatedDate2 = new Date("01-14-2023"); // mm-dd-yy, is format mai karenge to month 01-jan se start hoga.
console.log(mycreatedDate2); // 2023-01-14T00:00:00.000Z
console.log(mycreatedDate2.toLocaleString()); // 1/14/2023, 5:30:00 AM


// TIMESTAMP: jab polls designs karenge, quizz ke liye.
let myTimeStamp = Date.now()
console.log(myTimeStamp) // it comes in millisecond , 1696404752325

// and mujhe agar given date se millisecond nikalna hai, like for in hotel bookings, or koi poll bna rahe hai, and comparison karna hota hai
// to aap kyankrnge to jo given date hogi vo object hai, usko getTime() method karke millisecond value nikalenge aap, or fir compare karnge date ko iss milli second value se

console.log(mycreatedDate2.getTime());

// HOW TO MAKE THIS IN SECONDS 
console.log(Date.now()); // gives abhi ki date , ye milli second mai aayegi, always compare it with miliiseconds . but INTERVIEW MAI seconds mai convert karne ko bol dete hai
console.log(Date.now()/1000); // isse hojkayega but isme decimal values aajati hai, but vo nahi chahiye. we have other alternatie

console.log(Math.floor(Date.now()/1000));



// SOME OTHERB METHODS

let newdate = new Date()
console.log(newdate.getMonth());
console.log(newdate.getMonth() + 1); // to avoid end user confusion

console.log(newdate.getDay());


// `${newdate.getDate()} and the time is ${newdate.getTime()}`;


newdate.toLocaleString('default', {  /// isse customise kar skte hai sab kuch
    weekday: "long",
    timeZone: '' // google serch it.
})





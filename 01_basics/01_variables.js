const accountId = 12223
// const is keyword for declaring the constants that can not be changed once initialized. and if you assigned any value again to a const then it will give an error. like (accountId = 456 )=> this is gives an error becoz we already assinged the 12223 ti this constant.

let accountEmail = "tarun@google.com"
var accountPassword = "454663"
/* prefer not to use var
because of issue in block and functional scope.*/

accountCity = "Karnal"
// Without any use of keyword, you can declare this and will going to execute in js, but not perfer.

let accountState;
// when you only declare the variables in js and not initialized it will saved as undefined in memory.


accountEmail = "rajat@google.com"
accountPassword = "61564"
accountCity = "Banglore"


console.log(accountId);
//another method of console
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
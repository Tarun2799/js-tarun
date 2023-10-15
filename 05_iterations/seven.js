//  Let's see "MAP": ye koi bhi expressions/ maths calculations on every value par apply kareta hai, ans sbko return karega. whereas filter method mai jo value true return karegi vahi as a value return karta hai.

// myunderstanding : map means har value jo expressions jo denge usme map krke dega. And automatically return value.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNum = myNumers.map( (num) => {
    return (`${num} * 10 = ${num*10}`)   //scope used , so return keyword used. 
})

console.log(newNum);

// OP: this is also coming in the form of ARRAY.
// [
//     '1 * 10 = 10',
//     '2 * 10 = 20',
//     '3 * 10 = 30',
//     '4 * 10 = 40',
//     '5 * 10 = 50',
//     '6 * 10 = 60',
//     '7 * 10 = 70',
//     '8 * 10 = 80',
//     '9 * 10 = 90',
//     '10 * 10 = 100'
//   ]



// we can use multiple maps and filter with each other. This is called 'CHAINING'.

const newNums = myNumers                     // this is also a valid syntax.
                .map((num) => num * 10 )      // jab bhi chaining hoti hai, to is line ka result,
                                                //2nd chain mai pass hojata hai.ye direct array mai ni jayegi.
                .map( (num) => num + 1)      // yahan kabhi bhi value 1 ni aayegi, num*10 aayegi ans usme +1 hoga.
                .filter( (num) => num >= 40)     // or agar vo 40 se bada hoga to, vo final result mai aayega.

console.log(newNums);

// OP: [ 41, 51,  61, 71, 81, 91, 101]
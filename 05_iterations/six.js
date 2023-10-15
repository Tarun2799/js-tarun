// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item ) => {
//   console.log(item);
// } )

// OP: js
// ruby
// java
// python
// cpp

// Let's see this foreach loop returns some values or not.

// const values = coding.forEach( (item) => {
//     //console.log(item);
// } )

// console.log(values);

// OP: undefined.


//2. Let's try to  USE return.
//const values = coding.forEach( (item) => {
  // console.log(item);
  // return item;
//} )

// console.log(values); // still it's giving "undefined".
// means FOREACH is not returning values.So, what will do of we want to return some value or not.


// ===========
// coding.forEach( (item)=> {
//   console.log((`${item} is a programming language name.`));
// })



// we have other methods for AARAY that returns values.

// .filters( callback fn ) iske ander ek condition di jati hai, jo bhi array ki value true return karegi condition par ,uss value ko RETURN kiya jata hai.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myNums.filter( (num) => num > 4) // abhi isse kch ni aayega because not stored in any value.

const newNums = myNums.filter( (num) => num > 4)

console.log(newNums);  // OP: [ 5, 6, 7, 8, 9, 10 ].


// const nM = myNums.filter( (num) => {
//   num > 4 
// })
// why it is giving []? , because when we use SCOPE with arrow function,we should USE always RETURN keyword .i.e. explicit returning. when we don't use SCOPE that is , IMPLICIT RETURNING.


// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// LET'S SEE AN EXAMPLE WITH FOREACH.



// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {     // no other easy way. ye bhi kharab nahi hai. bs yahan condition deni padi.
//         newNums.push(num)
//     }
// } )

// console.log(newNums);



// OTHER BASICS WITH FILTER METHOD.

// array of objects. aise value DATABASES se milti hai.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



  let userBooks = books.filter( (bk) => bk.genre === 'History')

// let ubook = books.filter( (bks) => {
//   return (bks.genre === 'History')
// })

// console.log(ubook)


// OP: it is returning the array of books that are matching with constions. if no one matches it will return empty array.
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]


//2. gives ERROR , if declare it with const, and try to rewrite this value.
//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);

// 
userBooks = books.filter( (bk)=> {
  return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks)


// OP:
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]
// primitive
// 7 types : String, Number, Boolean , null, undefied, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 32322322323266566656n // bigInt

// Reference (non primitive)

// Array, Objects, Functions
const heros = ["shaktiman","naagraj", "doga"];
let myObj = {
    name: "Rameshwar",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}
//console.log(typeof myFunction); // function
//console.log(typeof bigNumber); // bigint
//console.log(typeof scoreValue); // number

//console.log(typeof isLoggedIn); // boolean
//console.log(typeof outsideTemp); // object

//console.log(typeof anotherId); // symbol
//console.log(typeof userEmail); // undefined

//*******************************************************

// Stack (primitive), Heap (non-primitive)

let myYoutubename = "rk jangid com"

let anothername = myYoutubename
anothername = "Ram jangid official"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "rkjangra@google.com",
    upi: "rkjangra@ybl"
}

let userTwo = userOne

userTwo.email = "raju@google.com"

console.log(userOne.email);
console.log(userTwo.email);
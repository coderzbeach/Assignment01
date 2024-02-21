
let someMonth; //camel casing STEP 1
function theMonth() //camel casing STEP 1
let currentMonth; //camel casing STEP 1
let summerMonth; //camel casing STEP 1
let myLibraryFunction; //camel casing STEP 1

4.4 //numeric literal expression STEP 2
'vase' //string literal STEP 2
true // Boolean literal expression STEP 2
null // null literal expression STEP 2

let anExample = 5 / (6 * 3) - 3; // first example of complex or variable expression STEP 3
let acExample = 5 + (10 /2); // second example of complex or variable expression STEP 3

let strFirstName, strLastName, strAddress, strCity, strState, strZipCode, intYourAge, strReferralSource, booMayWeContactYou; //declare 9 variables using Camel casing and Hungarian casing STEP 4

let strFirstName;
let strCity;
let strState;
strFirstName = 'Alex'; //variable assignment method 1 STEP 5 
strCity = 'San Diego'; //variable assignment method 1 STEP 5 
strState = 'California'; //variable assignment method 1 STEP 5 



let strFirstName = 'Alex'; //variable assignment method 2 STEP 5 
let strCity = 'San Diego'; //variable assignment method 2 STEP 5 
let strState = 'California'; //variable assignment method 2 STEP 5 

let strFirstName = 'Alex', strCity = 'San Diego', strState = 'California'; //variable assignment method 3 STEP 5 


let carYear 
carYear = 2000 + ' Honda'
// number and string coerced STEP 6

let acoer 
acoer = false + 'book' // add Boolean and a string STEP 7
let bcoer
bcoer = 7 + true    // add number and Boolean STEP 7

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'\m not sure about the former."'
console.log(someString) // not valid, changed to have backslash around the apostrophe STEP 8

let b = null 
b // b is returned as null STEP 9

f // since f has not been defined, it is returned as undefined STEP 9

typeof 'desk' // unary typeof operator string STEP 10
typeof 2 // unary typeof operator number STEP 10
typeof false // unary typeof operator Boolean STEP 10
typeof jump // unary typeof operator undefined STEP 10
typeof {x:1, y:2} // unary typeof operator object STEP 10


alert('Hello ' + 'Alex Dolgoter' + ', welcome to the JavaScript class!') //Step 11

let ename = 'Alex Dolgoter'
alert('Hello ' + ename + ', welcome to the JavaScript class!') //Step 12

let ename = 'Alex Dolgoter', course = 'JavaScript'
alert('Hello ' + ename + ', welcome to the ' + course + ' class!') //Step 13

let ename = 'Alex Dolgoter', course = 'JavaScript'
alert('Hello ' + ename + '. \nWelcome to the ' + course + ' class!') //Step 14

let ename = prompt("What is your name?");
let course = 'JavaScript'
alert('Hello ' + ename + '. \nWelcome to the ' + course + ' class!') //STEP 15

let ename = prompt("What is your name?");
let course = prompt("What is the course?");
alert('Hello ' + ename + '. \nWelcome to the ' + course + ' class!') //STEP 16

let x = 10, y = 20
x + y  // add 10 and 20 after declaring and assigning STEP 17

let x = 20
x += 20 // add and assign 20 to x, which was 20, STEP 18

let x = 20
x *= 5 // multiply and assign 5 to x, which was 20, STEP 19

let x = 20%3
x /=1 // modulus of 20 divided by 3, divided and assigned 1, STEP 20

let a = 10
let b = 15
a == 10 || b ==10 //logical and comparison operator which return true , STEP 21

let a = 10
let b = 15
a == 10 && b ==25 //logical and comparison operator which return true , STEP 22
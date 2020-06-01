/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// VAR, LET & CONST

// In JavaScript, you can use three different commands to declare a variable - var, let and const. 

/* 1. the keyword "var" is used to declare a variable in a global scope. That means that this variable 
 * can be used throughout the whole spectrum of your code. Not only that, the var keyword, as it hints, 
 * can be changed easily like the following:
 */
 
 var car = "Toyota";
 var car = "Ford";

 console.log("I drive a" + car); // Prints "I drive a Ford" to the console
 
/* 2. The keyword "let" is used to declare a variable as well, but potentially in a limited scope. 
 * When a variable is declared with let inside a certain block of code, that variable is only known to 
 * that block of code's scope or is referred to as locally scoped. However, if it is declared outside of 
 * a limited block, its scope is like using var.
 */
 
/*Here let is used to declare fTemp and fToCel within a code block, so if you call those variables outside
 *the block, the variables with return undefined.
 */
 
function fToC(fahrenheit) {
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
} 
//console.log(fTemp) returns undefined.

//let cannot be reassigned in the same codeblock like the following.

// let camper = 3;
// let camper = 4;  //throws an error

/* 3. The keyword const is used to declare a variable that will remain constant, as is obvious. This type, 
 * like let, is block scoped. 
 */

// const dog = true;    //with this line alone, is okay.
// const dog = false;   //fails at this point because it cannot be reassigned.

//HOISTING

/*Hoisting occurs when a variable (only variables declared with the keyword var) are assigned, or used
 *before they are declared. JS will automatically "hoist" the declaration up in the code for you so that
 *the code can run. Here is an example-
 */
 
 x = 5;
 
 console.log(x +5);
 
 var x; //this will run without error because JS will "hoist" the declaration up past where you used it.
 
 
 
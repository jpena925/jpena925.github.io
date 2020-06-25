/*
 * DATATYPES:
 *
 * Datatypes are types of data that JS can understand the format of. These types inlcude but are 
 * not limited to- number, string, boolean, array, object, function, undefined, null, NaN and infinity.
 *
 */

//1. NUMBERS
     5;
     -30;
     //any integer passed through your code will be recognized as a number in the same way is intuitive

//2. STRINGS
  //Strings are data wrapped in quotes. They can be letters, numbers or other datatypes.
  //Characters are stored in a string at different indexes, like arrays. You can access them
  //by writing the string and index in bracket notation. 
  
  var myName = "Jack";
  var myFavBook = "99 Bottles of Beer";
  var dog = "True";
  
  myName[0]; // will return "J" because J is at the zero index in the string "Jack".
  
 //all of the values assigned to these variables are examples of strings.
 
 //You can add or concatenate strings as well
 
 var myFullName = myName + "Pena";
 console.log(myFullName);// will return "JackPena"
 
//3. BOOLEANS
  /*Booleans are true or false values that are treated almost like on and off switches. They are often 
  * used in conditional statements and with comparison operators.
  */
  
  true; //will return true, the computer recognizes this as a boolean
  
  1 === 2; //will return false, as 1 is not strictly equal to 2
  
//4. ARRAYS
 /* Arrays are a complex datatype that store any number of other datatypes as a list. This list is zero-indexed, meaning
 * that the values in the list are accessed by their place in the list starting with the number zero. 
 */
 
 var arrays = [1, true, "dog", [1,2,3], {name: "Jack", address: "Thalia"}];
 //this array includes a number, boolean, string, array and object.
 
 //You can access an array with bracket notation like the following.
 arrays[0]; // returns 1
 arrays[1]; // returns true
 arrays[2]; // returns "dog"
 
 //You can add to take away values from arrays by any of the following methods:
 var array = [1,2,3,4];
 //.PUSH adds to the end
 array.push(5);//results in [1,2,3,4,5]
 //.POP removes from the end
 array.pop();//results in [1,2,3,4]
 //.UNSHIFT adds to the beginning
 array.unshift(0); //results in [0,1,2,3,4]
 //.SHIFT removes from the beginning
 array.shift(); //results in [1,2,3,4]
 
 
 //5. OBJECTS
  /* Objects are another complex datatype that organizes data in key/value pairs referred to as properties. 
  * They can hold any other datatypes and can be accessed by bracket or dot notation. 
  */
  
  //Object with key value pairs including a string, number, boolean and array
  var object1 = {
      name: "Jack",
      age: 27,
      car: true,
      siblings: ["Sara", "Nick"]
  };
  
  //accessing an object by dot notation
  object1.name; //returns "Jack"
  //accessing an object by bracket notation
  object1["siblings"][0]; //returns Sara


// 6.FUNCTIONS
/* Functions are reusable blocks of code that process any value(s) and return a new one. They must be declared 
* before they can be called. That includes stating the name, parameters, body and what the function is to return.
*/

//function add takes parameters a and b and returns them added together.
function add(a,b){
    return a+b;
}

//Calling function add
add(1,2); //returns 3

//Not all functions require parameters or have a return statement

//function without parameters or return statement, if called will always return "Hello"
function hello(){
    console.log("Hello");
}

/* Functions always stop after return is run, so the following function will throw an error since console.log
* me is an unreachable part of the function
*/

// function bye(){
//     console.log("Hey");
//     return "it's"
//     console.log("me");
// }

//7. UNDEFINED 
// Undefined is a primitive value that describes a variable that has been declared but not assigned.

//this will return undefined as it has not been assigned
var television;
console.log(television);

//8. NULL
// This is a value that is assigned to be empty. It is a representation of an empty value rather than zero.

// There is a null value in the array to represent an empty placeholder
var x = [1, 2, null, 4];

//9. NaN
// This is another primitive datatype that is NotaNumber. It is returned when the math operation does not exist.

//Nan will be returned
Math.sqrt(-1);

//10. Infinity and -Infitity
// These are just numeric values representing infinity and negative infinity

//This will return infinity
1/0;

//This will return negative infinity
-Infinity/3

//11 $ 12. Primitive vs. Complex Datatypes
/* Primitive datatypes are finite simple datatypes that hold a value and are always copied by value.
* Numbers, strings, booleans, NaN, undefinted and null are all primitive datatypes.
*/

//Copying by value means that while 1 is stored in var a, when var b = a, now b points to 1 too, rather than to a.
var a = 1;
var b = a;

/* Complex datatypes collect other values and are indefinite in size. They copy by reference instead of by value.
* Objects, arrays and functions are all examples of complex datatypes.
*/

//An object being copied by reference here. Unlike above, var b now points to var a instead of the actual object. 
//This way, if whats in var a is changed, var b will only point to a and will change as well.

var a = {one: "Jack"};
var b = a;
a.one = "Jon";
console.log(b.one); // "Jon"


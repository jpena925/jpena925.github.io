/*
 * HOISTING:
 *
 * 0. Hoisting is the process of the interpreter reading all the code and "moving" the variables and functions
 * to the top (hoisting) of their scopes so that all variable references and function calls will process normally within
 * their prospective blocks.
 */
 
 //1. VARIABLE HOISTING
 // Variables are hoisted in different ways depending what keyword is used to declare them. 
 
 //VAR-
 /* A variable declared with the var keyword will always be hoisted to the top of the global scope unless
  *it is declared within a function, where it will only be hoisted to the top of the function scope. However,
  *in the case of var, ONLY the declaration will be hoisted, not the assignment. The assignment will only become
  * available when it is initialized by the interpreter.*/
  
  //an example of var hoising in the global scope
  console.log(greeting);
  
  var greeting = "hello!";// will return undefined because ONLY the declaration is hoisted, not the value "hello".
  
  //an example of var hoisting in the function scope
  
  /*console.log(salutation);  <<< this would throw a reference error because the variable var is only hoisted to the
                 top of the function scope, not the global scope */
  
  function sayBye(){
      console.log(salutation);
      var salutation = "Bye!";
  }
  
  sayBye(); //will also return undefined because only the declaration is hoisted to the top of the function, not "Bye!
  
  
  
  //LET & CONST
  /*When a variable is declared with the let and const keywords, it is hoisted to the top of the scope but is
  * not accessible until the interpreter reaches the line where it is declared or initialized. Essentially we
  * can think of them as not being hoisted. */
  
//example below
  
  //console.log(address); will throw a reference error since address isn't available until initialization
//   let address = 1121;
   
   
// example 2 below - will throw another reference error because the const variable is accessible until initialized

//   if (true){
//       console.log(drink);
//       const drink = "lemonade";
//   } 


//2. FUNCTION HOISTING
/* Functions are generally hoisted in their entirety to the top of their scope. So not only is the function
 * declaration hoisted, so is the definition (body). However, if the function is a function expression (where)
 * it is assigned to a variable, the rules of variable hoisting will take over and only the variable declaration 
 * will be hoisted, not the function. Also, function declarations take precedence over variable declarations.*/
 

 //a function being called before it is initalized, but because of hoisting, will return "Do not buy this car."
 buyCar(1998);
 
 function buyCar(year){
     if (year > 2000){
         return "BUY!";
     } else {
         return "Do not buy this car.";
     }
 }
 
/*The following example will return an error saying doIBuyIt is not a function because only the declaration of 
 * doIBuyIt is hoisted, so the interpreter does not know until it reaches the assignment that it is one. In this
 * function expression, only the variable declaration is hoisted. */
 
//  doIBuyIt(1998);
 
 var doIBuyIt =  function buyCar(year){
     if (year > 2000){
         return "BUY!";
     } else {
         return "Do not buy this car.";
     }
 };
 
 
 //3. THE JS INTERPRETER
 /* The interpreter is program that is able to convert the human code (high-level code) to machine code that the 
  * computer can understand. It is essentially translating all of the code into 1's and 0's very quickly to tell 
  * the computer what exactly to do. The interpreter initially runs through all the code one time and will hoisted
  * all the variable declarations and functions to the top then reads through it again evaluating and translating 
  * into low-level code for the computer. This whole process is known as compiling. If the interpreter finds errors
  * in your code, it will stop reading from that point and notify you of the error. */
 
 
 
 
 
/*
 * SCOPES:
 *
 * Scopes refer to the degree of which variables and constants are available within code. Scope is generally
 * descriped as being global, local, or block scoped. The best way to think about this is almost like parents and
 * children where the global scope is the largest and contains the local scope like a child. Everything that is
 * stated globally (by the parents in our analogy) is available to the local scope (to the child). However, not 
 * everything known to the local scope is always known to the global scope. To add another layer, block scope can 
 * be a child of the local scope or the parent scope and generally variables and constants declared there are only
 * known within the block scope. More on that below. 
 */
 
 
 //VAR, LET, and CONST SCOPE
 
 //VAR
 /*var is a way to delcare a variable that is the most available to the whole code. It is considered to be 
  * function scoped, which means that within functions it is only accessible inside the function it is in.
  * Otherwise, var is globally scoped and is available for the whole code to use.
  */
  
  var name = "Jack";
  
  if (true){
      console.log(name);
  }//will log "Jack" to the console because the name variable is available to the global scope for this block of code to use.
  
  
  function sayBye(){
      var salute = "adios!";
      console.log(salute);
  }
  
  //console.log(salute) would return a reference error because the variable salute is unknown globally but only known to the function.
  
  
  
  //LET
  /* let is another way to declare a variable that like var, can be reassigned. However unlike var, is BLOCK SCOPED and is only 
   * known to the block of code it is in. If declared in the global scope it is available for all, but if in any function
   * or other local block, cannot be accessed outside of it.
   */
   
   //let can be reassigned, like var
   let smile = "happy"
   smile = "happier";
   
   
   //below, the variable count is accessible inside the while loop code block and will log 1 - 9 to the console.
   let count = 0;
   
   while (count < 10){
       console.log(count);
       count++;
   } 
   
   //below, let is used in a block where it is not accessible by the global scope. conditional will log "sunny".
   
   if (true){
    let weather = "sunny";
    console.log(weather);
   } else {
    let weatherBad = "rainy";
    console.log(weatherBad);
   }
   
   /* console.log(weather); will return a reference error because let is block scoped in the conditional statement block 
    * and is not available to the global scope.
    */
    
    
  //CONST
  /*Const is the strictest way to declare a variable. Its value cannot be changed by reassignment and it cannot be redeclared.
   *However, like let, it is block scoped and is only available to the scope it is a part of. If it is in the global scope, it 
   *is available globally, whereas if it's in a code block, it is only available to that code.
   */
   
  const age = 27;
  
  function add(a){
   return a + age;
  }
  
  add(3); //will return 30 because the const age is accessible to the function.
  
  
  function addAgain(a){
   const birthYear = 1992;
   return birthYear + 10;
  }
  
  addAgain(8); //will return 2000 because the const variable is available inside the block to use.
  //console.log(birthYear); will return a reference error because birthYear is not accessible to the global scope.
  
  
 
 // VARIABLE SHADOWING
 /* Variable shadowing occurs when you have the same variable names in two different scopes. Lets say you have a variable
  * declared in the global scope and one in the local scope with the same name. The local block will use its locally
  * declared variable while the global block will use the global one. However, it is possible for the local block to modify
  * the variable and change it in the global scope as well, only if the code block runs or is called on (function).
  */
  
  let lemonCount = 10;
  
  function lemonString(){
   let lemonCount = 13;
   return "I have " + lemonCount + " lemons.";
  }
  
  lemonString(); /*will return "I have 13 lemons" because the function uses the let variable in the block scope as it 
                  * overshadows the global let lemonCount.
                  */


//Below is an example where the block scoped variable overshadows and CHANGES the global variable
var food = "bread";
console.log(food);

function displayFood(){
    food = "meatloaf";
    console.log(food);
}

displayFood(); // prints meatloaf
console.log(food); // prints meatloaf, as the function has been called and has changed the value assigned to var food.


/*Lastly, below is a situation where you have a variable and parameter that is named the same thing. In this case,
 the function will ignore the global variable and refer to its local scope. This is because variables are always
 function-scoped or block scoped, so in the case of functions, they are totally self reliant.
 */
 
var multiply = 0;

function up (multiply){
 return multiply * 10;
}

up(5); // Will return 50 because the function refers to the parameter placeholder rather than the global variable multiply
console.log(multiply);/* will return 0 because this command does not access the function or call it and will only know 
                      * what is on the global scope */
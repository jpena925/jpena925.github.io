/*
 * OPERATORS:
 *
 * Operators are built in tools in JavaScript that help manipulate, compare, or describe data. 
 * There are many categories of operators including - assignment, arithmatic, comparison, logical
 * unary and ternary.
 */
 
 
 //1. ASSIGNMENT OPERATORS
 
 //The most basic assignment operator is the = sign. It assigns whatever is on the right of it to be held by the left.
 var x = 1; 
 
 //The following are incremental assignment operators. They use arithmatic operators with assignment to return a value.
 //+=, -=, *=, /= results in the right side x (plus, minus, multiplied or divided by) one becoming the new x variable.
 x += x + 1;
 x -= x + 1;
 x *= x + 1;
 x /= x + 1;
 
 
 
//2. ARITHMETIC OPERATORS

//These are basic mathematic operations inlcuding +, -, *, / and modulus % which shows the remainder of two divided numbers.
1 + 1; // results in 2
2 - 1; // results in 1
3 * 2; // results in 6
4 / 2; // results in 2
13 % 3; //results in 1



//3. COMPARISON OPERATORS

/*These operators compare values of datatypes. There is greater than (>), less than (<), greather than 
 * or equal to (>), less than or equal to (<=), strictly equal to (===), and nonstrictly equal to (==).
 * The comparison always result in a boolean value of true or false.
 */
 
 5*5 > 20; // results in true
 7 < 5; // results in false
 3 >= 3; // results in true
 4 <= 10; // results in true
 "Jack" === "jack"; // results in false due to case
 "1" == 1; // results in true because nonstrict equality does not evalue datatype
 
 
 
 //4. LOGICAL OPERATORS
 // These operators determine the logic between datatypes and return a boolean. They are and (&&) and or (||).
 
 1 === 1 && 2 === "two"; //returns false because not both are true
 true === true || "jack" === "Jack" ;// returns true because at least one is true
 
 
 
 //5. UNARY OPERATORS
 // Unary operators only evaluate one value and return another value. They include !, - and typeof to name a few.
 
 !false; //returns true with the bang unary operator
 typeof 5; //returns "number" as it evaluates the datatype
 -5; //returns -5 as it negates a number from positive to negative
 
 
 
 //6. TERNARY OPERATORS
 /* Ternary operators take three values and return one. The typical format is to have a condition followed by a ?
  * what to return if it is true, a colon (:), then what to return if false.
  */
  
 var age = 11;
 var nightClub = (age >= 21) ? "Enter" : "Leave now.";
 console.log(nightClub); //returns "Leave now." because the condition was not met (is false)
 
 
 

 
 
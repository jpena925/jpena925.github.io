/*
 * STRING MANIPULATION:
 *
 * String Manipulation is the process of changing a string. This can be done with arithmetic operators
 * or with the many mehtods of strings.
 */
 
 //1. WITH OPERATORS
 // You can change a string by using the + operator.
 
 //With addition
 var name = "Jack";
 var fullName = name + " Pena";
 console.log(fullName);
 
 
 //2. WITH STRING METHODS
 // There are built in methods in JavaScript that help you change strings. Here are some-
 
 //.toUpperCase(); changes the whole string to upper case.
 //.toLowerCase(); changes the whole string to lower case.
 
 var dogName = "Theo";
 dogName.toUpperCase(); // returns "THEO"
 dogName.toLowerCase(); // returns "theo"
 
 //.length evaluates the length of a string
 dogName.length; //returns 4
 
 //.concat combines two strings together
 var dogLastName = "Pena";
 var dogFullName = dogName.concat(" ", dogLastName); 
 console.log(dogFullName); //returns "Theo Pena"
 
 
 
// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
 //function that takes in a base and will test if the value is greater than the base
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (value){
        if(value > base){
            return true; //will return if greater
        } else {
            return false; //will return if not
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
//function that taks a base and tests if the value is less than the base
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
      return function (value){
        if(value < base){
            return true; //returns true if value is less than the base
        } else {
            return false; //returns false is value is not less than the base
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 //function that takes in a single character and returns a function that tests if a string starts with that character
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

//function that takes in a string and returns true or false if the string starts with the given character 
  return function (string){
      if(string[0].toLowerCase() === startsWith.toLowerCase()){ //convert to lowercase and compare
          return true; //return true if same string value
      } else{
          return false; //return false if not
      }
  }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 
 /*function that takes in endswith character and returns a function that takes in a string and tests if the string
  *ends with that character*/
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //function that takes in a string and returns true if its last character matches the endsWith, else false
     return function (string){
      if(string[string.length-1].toLowerCase() === endsWith.toLowerCase()){//use length-1 to find the last char and compare
          return true;
      } else{
          return false;
      }
  };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
 //function that takes in an array strings and a modify function and returns the array modified
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    var newArray = []; //will hold the modified strings
    
    for(var i = 0; i < strings.length; i++){ //loop over the strings parameter 
        newArray.push(modify (strings[i])); //call the modify function and push the modified string to the new array
    }
 return newArray; //return the new array
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 //a function that takes in an array of strings and a test, and returns true if all strings pass, false otherwise
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
var array2 = []; //will hold the evaluated true and false values of each string in the array

  for (var i = 0; i < strings.length; i++){
      array2.push(test(strings[i])); //a for loop that tests each index in the array and pushes the t/f value to a new array
  }

var array3 = [] //will hold one value to signify if all the strings in array2 are true or false

 for (var i = 0; i <array2.length; i++){
   if (array2[i] === false){ //loop over array2 and test if all the strings are true
    array3.push(1); //if one of the strings equals false, push the number 1 to array3
   }
  }

if (array3[0] === 1){ //if there is a number 1 in array 3, that means there was a false in the test
    return false; //so return false
} else {
    return true; //if there was no number 1 in array 3, that means all tests were true and to finally return true.
}



 
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
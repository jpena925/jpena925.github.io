// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //use a conditional with the Array.isArray to check if the value is an array or not
    if (Array.isArray(value)){
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 //function that takes in a value and tests if it is an object, is not null, is not an array, and is not a date
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === "object" && value !== null && Array.isArray(value) === false && value instanceof Date === false){
        return true; //if all conditions met, return true
    } else {
        return false; //if not all conditions met, return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 //function that takes in a value and will return if the value is an object/array.
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) || typeof value === "object" && value !== null && value instanceof Date === false){
        return true; //will return true if is an arry or is an object but not null or a date
    } else {
        return false; //will return false if satisfies neither case
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
 //create a function that takes in a vale and will return an accurate description of the datatype
function typeOf(value) {
    // YOUR CODE BELOW HERE //
  if (typeof value === "string"){
      return "string"; //tests for a string
  } else if (typeof value === "number"){
      return "number"; //tests for a number
  } else if (Array.isArray(value)){
      return "array"; //tests for an array
  } else if (typeof value === "object" && value !== null && Array.isArray(value) === false && value instanceof Date === false){
      return "object"; //tests for an object in the same way as before
  } else if (typeof value === "undefined"){
      return "undefined"; //tests for undefined
  } else if (value === true || false){
      return "boolean"; //tests for boolean
  } else if (value === null){
      return "null"; //tests for null
  } else if (value instanceof Date === true){
      return "date"; //tests if is a date
  } else if (value instanceof Function === true){
      return "function"; //tests for a function
  }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

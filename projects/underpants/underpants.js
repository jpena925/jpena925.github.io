// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
    _.identity = function(value){
        return value;
    };
    
    
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/



  _.typeOf = function (value) {
    if (typeof value === "string"){ //conditional that if typeof is string, return string
        return "string";
    } else if (typeof value === "undefined"){//if typeof is undefined, return undefined
        return "undefined";
    } else if (typeof value === "number"){//if typeof is number, return number
        return "number";
    } else if (typeof value === "boolean"){//if typeof is boolean, return boolean
        return "boolean";
    } else if (typeof value === "function"){//if typeof is function, return function
        return "function";
    } else if (value === null){ //if the value is equal to null, return null
        return "null";
    } else if (Array.isArray(value)){ //if it is an array, return array
        return "array";
    } else { //if none of the above, return object
        return "object";
    }
        
  };

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (array, number){
    if (!Array.isArray(array) || number < 0){ //if it is not an array or is less than 0, return []
        return [];
    } else if (typeof number !== "number" || number === undefined){ // if it is not a number or is undefined, return the first index of the array
        return array[0];
    } else {
        return array.slice(0,number); //otherwise, return the array slice from beginning to the given number
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/




_.last = function (array, number){
  if (!Array.isArray(array) || number < 0){ //if not an array or is a negative number, return []
        return [];
} else if (typeof number !== "number" || number === undefined){ //if not a number or is undefined, return the last index value
    return array[array.length-1];
} else if (number > array.length){ //if the number is greater than the length of the array, return the entire array
    return array;
} else {
      return array.slice(array.length-number, array.length); //otherwise, return a slice of the number of array from the end
   }
};



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value){ //takes in an array and a value 
    for (var i = 0; i < array.length; i++){ //loops through the array
        if (array[i] === value){ //if the array includes the value at any point, return the index of that occurance
            return i;
        }
    } return -1; //if it does not occur at any point in the loop, return -1
};




/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//use a ternary operator to see if value is in the array. if so, return true otherwise return false.
_.contains = function (array,value){
 return (array.includes(value) ? true : false); 
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection, func){
//if collection is array, loop through it and call the function for each iteration
//if collection is object, looop through it and call the function for each iteration

  if (Array.isArray(collection)){ //condtional that check if is an array
      for (var i = 0; i < collection.length; i++){ //loop through the array
          func(collection[i], i, collection); //call function with value, i and array collection
      }
  } else {
      for (var key in collection){ //if not an array, for in loop through the object
          func(collection[key], key, collection); //call function with value, key and collection
      }
  }

};
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (array){
//function that takes an array and returns the array with all duplicates removed. use indexof function
//indexOf returns -1 if the value isn't there and returns the index value if it is 
    var newArray = []; //variable to store unique values
    
    for (var i = 0; i < array.length; i++){ //looping over the array
        if (_.indexOf(array, array[i]) !== -1 && !newArray.includes(array[i])){ //as long as indexOf doesn't return -1 and the newArray doesnt have the value already,
            newArray.push(array[i]); //add the value to the newArray
        }
    } return newArray; //at the end of the loop, return the whole newArray

};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, func){
    //loop through array and call function for each value
    //return new array of elements for which calling function returned true (like a filter not a modifier)
    //function may return something other than true or false
    
  var filterArray = []; //a new array that will hold the values that pass the function as true
  
  for (var i = 0; i < array.length; i++){ //loop through the array
      if (func(array[i], i, array) === true){ //if function returns true, add the value in array to the new array
          filterArray.push(array[i]);
      } //doesn't need an else statement because it has to equal true, otherwise do nothing
  } return filterArray; //return the newArray
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    //the opposite of filter, where function takes in array and function and returns new array with elements 
    //that when tested by func returned false.
    //use filter in implementation
    return _.filter(array, function(e, i, a){ //call filter function and use a callback function that returns the opposite of func, giving you the false array
        return !func(e, i, a);
    });
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (array, func){
    var bothArray = [[],[]]; //create an array with two empty arrays to hold trues and falses
    
   
   for (var i = 0; i < array.length; i++){
       if (func(array[i], i, array)){ //loop over array to check if true
           bothArray[0].push(array[i]); //push to trues
       } else if (!func(array[i], i, array)){ //loop over array to check if false
           bothArray[1].push(array[i]); //push to falses
       }
   } return bothArray; //return array
};
    

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, func){
    var mapArray = []; //will hold altered values
    
     if (Array.isArray(collection)){ //if is an array use this code
      for (var i = 0; i < collection.length; i++){  //loop through array
          mapArray.push(func(collection[i], i, collection)); //push the new value from each iteration of function call
      }
  } else {
      for (var key in collection){ //if an object use this code
          mapArray.push(func(collection[key], key, collection));  //loop through and push from each itertation of function call
      }
  }return mapArray; //return array of altered values

};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (array, key){//function that passes in an array and prop and returns array of the value of key for each element
  let final = array.map(function(element){ //map function to look through and return all values associated with key
      return element[key];
  });
  return final; // return final that has all the values associated with the given key
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function (collection, func){
// create final variable to return if true or false;
var final = true;
// if function is not undefined
if (func !== undefined) {
    // pass collection through .each function, passing arguments of element, index, and collection
    _.each(collection, function(element, index, collection) {
        // after passing through function, if the return value is false
        if(func(element, index, collection) === false) {
            // set final = false
            final = false;
            }
        });
}
// else if function is not undefined
else {
    // pass collection through .each function,
    _.each(collection, function(element) {
        // if return value is false
        if(element === false) {
            // final = false
            final = false;
            }
        });
    // return false
    } return final;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, func){
var final = false;
// if function is not undefined
if (func !== undefined) {
    // pass collection through .each function, passing arguments of element, index, and collection
    _.each(collection, function(element, index, collection) {
        // after passing through function, if the return value is true
        if(func(element, index, collection) === true) {
            // set final = true
            final = true;
            }
        });
}
// else if function is not undefined
else {
    // pass collection through .each function,
    _.each(collection, function(element) {
        // if return value is true
        if(element === true) {
            // final = true
            final = true;
            }
        });
    // return final
    } return final;
};




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (arr, func, seed){
 
 if (seed === undefined){ //if seed is not defined, use var total which will equal the value at array index 0
     var total = arr[0];
     for (var i = 1; i < arr.length; i++){ //loop through the array starting at first index like directions say
         total = func(total, arr[i], i); //total will now equal the func with the parameters of the total, index value and index
     } 
        return total; //return total
        
 } else {
     total = seed; //if seed is given, set it equal to total
     for (var i = 0; i < arr.length; i++){ //loop through array starting at zero index
        total = func(total, arr[i], i); //set total now equal to the func with the parameters of total, array value and index
     
     } 
        return total;//return total
 }
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (obj1,obj2,...obj){
  //input any number of objects and return obj1 with values changed/added from all objects
  
  
  for (var i = 0; i < obj.length; i++){ //loop through obj to isolate each object in array
    for (var key in obj[i]){ //once at the object, loop through the object at that index
      obj2[key] = obj[i][key]; //then set the objects key/values equal to keys (whether existing or not) in obj2
    }
  }

  for (var key in obj2){ //now with 2's updated keys, loop through to update obj1
      obj1[key] = obj2[key]; //set obj2 key/values equal to obj1's to update them
  }
  return obj1; //return obj1;

};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

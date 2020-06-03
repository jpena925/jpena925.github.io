// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 
 
 /*a function that takes a start and end parameter and will return all numbers between those numbers in order if start
 is less than end in ascending order and if start is more than end in descending order */
 
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //

  var array = []; //will hold the numbers from start to end

if(start < end){ //conditional that if start is less than end
  while (start <= end){ //create a while loop to push all the numbers from start to end ascending
          array.push(start);
          start++;
        }
} else if (start > end){ //if start is more than end
  while (start >= end){ //a while loop that will push all the numbers from start to end descending
          array.push(start);
          start--;
        }
}
return array; //return the final array

    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
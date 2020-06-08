////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function that takes in two numbers and returns the lesser of the two using Math.min
function min(num1,num2) {
  return Math.min(num1,num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function that takes in a number and returns true if even false if odd
function isEven(num) {
  //num % 2 === 0, return true
  //num % 2 === 1, return false
  //if num < 0, make positive and rerun
  //make the number 1 or 0 to get false or true by returning to the function with the num 2 less
  if (num === 0){ 
    return true;
  } else if (num === 1){
    return false;
  } else if (num < 0){
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function that takes in a string and a character and will return how many times the character appears in the string
function countChars(string1, char) {
  var counter = 0; //counter variable that will hold the occurances of character
  
  for (var i = 0; i < string1.length; i++){ //loops through the string to check each index for given character
    if (string1[i] === char){ //if string index is equal to the character, add one to the counter
      counter ++;
    } else {} //if not the character, don't do anything
  }
  return counter; //return the counter
}  

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function that takes in a string and returns how many times "B" occurs in the string
function countBs(string) {
  var counter = 0; //counter will hold the occurances of B
  
  for (var i = 0; i < string.length; i++){ //loop through the string to check each index of it for B
    if (string[i] === "B"){ //if equal to B, add one to the counter
      counter ++;
    } else {} //otherwise don't do anything
  }
  return counter; //return the final number
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};


////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function triangles that takes in a number and prints numbers of hashtags from 1 to the number
function triangles(number) {
  var hash = "#"; //variable created to store hash
  for (var i = 1; i <= number; i++){ //loop to go from 1 to the input number
    console.log(hash); //log the hash
    hash += "#"; //add a hash to the value of hash each iteration
    }
  
}

triangles(); //calling triangles

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*function fizzBuzz that takes in two parameters, each a number that will represent a range. it will return this range printing all
 numbers in the range except for numbers div by 3 (not 5) print fizz, visa versa buzz and both fizzbuzz*/
 
function fizzBuzz(num1, num2) {
  for (var i = num1; i <= num2; i++){ //a loop from num1 to num 2
    if (i % 3 === 0 && i % 5 === 0){ //if number is divisible by both, print fizzbuzz
      console.log("fizzbuzz");
    } else if (i % 5 === 0){ //if only divisible by 5, print buzz
      console.log("buzz");
    } else if (i % 3 === 0){ //if only divisble by 3, print fizz
      console.log("fizz");
    } else {
      console.log(i); //otherwise, print the number
    }
  } 
    
}



////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function will take in any number and make a numberxnumber chessboard alternating " " and "#"
function drawChessboard(size) {
  var board = ""; //will hold the chessboard

for (var y = 0; y < size; y++){ //loop that evaluates the vertical values
  for (var x = 0; x < size; x++){ //loop that creates each line
    board += ((x % 2 === y % 2) ? " ": "#"); // ternary statement that if x and y are both odd or both even, return " ", otherwise "#"
  } board += "\n"; //each iteration of the vertical loop, make a new line
}
console.log(board); //return the board
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

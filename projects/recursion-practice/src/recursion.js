// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // Base case
  //if n = 0 or 1 return 1
  // if less than 0 return null
  if (n === 0) {
    return 1;
  } else if (n === 1){
    return 1;
  } else if (n < 0){
    return null;
  }
  
  //Recursive Case
  //Take it and multiply by factorial (n-1)
  return n * factorial(n-1);
  
};  





// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //Base case
  //Array.length === 0
  //return
  if (array.length === 0) return 0;
  //Recursive Case
  // add array[0] + sum(array.slice(1));
  return array[0] + sum(array.slice(1));
  
};



// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //SKIP
};

// 4. Check if a number is even.
var isEven = function(n) {
  //Base case: 
  //N = 0 return true
  //N = 1 return false
  
  if (n === 1){
    return false;
  } else if (n === 0){
    return true;
  }
  
  // Recursive Case
  // return isEven(n-2)
  // take the absolute value of n to account for negative integers
  return isEven(Math.abs(n) - 2);
  
};







// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //Base Case
  //n = 0 return 0
  if (n === 0) return 0;
  
  //Recursive Case
  //if n > 0
  if (n > 0){
  return (n - 1 + sumBelow(n - 1));
  } else {
  //if n < 0
  return (n + 1 + sumBelow(n + 1));
  }
};




// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y) {
  // Base Case
  // stop recurring or just return [] if x + 1 (ascending) is y or they're equal or if x  - 1 is y (descending)
  if (x + 1 === y || x === y || x - 1 === y){
    return [];
  }
  
  //Recursive Case
  //when x is less than y return the value above it + calling the function for the next value
  if (x < y){
  return [x + 1].concat(range(x + 1, y));
  } else { //when x is more than y return the value one below it + calling the function for next value
    return [x - 1].concat(range(x - 1, y));
  }
};





// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //Base Case
  //exp = 0 return 1
  if (exp === 0){
    return 1;
  }
  
  //Recursive case
  // returning base * exponent (base, exp - 1)
  if (exp > 0){
  return (base * exponent(base, (exp - 1)));
  } else {
    return exponent(base, exp + 1) / base;
  }
};






// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // Base Case
  //Stop recursing when n is 1 or less than 1
  // If n = 1 => return true
  // If n < 1 => return true
  if (n === 1){
    return true;
  } else if (n < 1){
    return false;
  }
  
  //Recursive case
  //Divide n /2 
  return powerOfTwo(n / 2);
  
};




//PSUEDO
// 9. Write a function that accepts a string and reverses it.
var reverse = function(string, newString = '') {
  //Base Case
  //Stop when string.length === newString.length
  if(string.length === newString.length){
    return newString;
  }
  
  //Recursive Case
  //return newString with next letter from string each recursion
  return reverse(string, newString + string[(string.length - 1) - newString.length]);
  
};





// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //Base case
  //If string.length = 1 => true
  //If string.length = 0 => return true
  //If string[0] !== string[string.length - 1] => return false
  string = string.toLowerCase().replace(" ", "");
  console.log(string);
  
  if (string.length === 1 || string.length === 0){
    return true;
  } else if (string[0] !== string[string.length - 1]){
    return false;
  }
  
  //Recursive case
  //return function with first and last characters chopped off
  return palindrome(string.slice(1, string.length - 1));
  
  
  
};






// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  //SKIP
};







// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
//Base Case
//if y === 0, return 0 where it will stop recursing (or build up from)
//Recursive Case
//if y is greater than 0, return x plus calling the function with y one less
//if y is less than 0, return negative x plus calling the function with y one more
var multiply = function(x, y) {
  
  if (y === 0){
    return 0;
  }
  

  if (y > 0){
    return x + multiply(x, (y - 1));
  } else {
    return -x + multiply(x, (y + 1));
  }
};






// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  //SKIP
};







// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  //SKIP
};







// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //Base Case
  //If str1 and str2 both have a length 0 - return true
  //str1[0] does not equal str2[0] - return false
  if (str1.length === 0 && str2.length === 0){
    return true;
  } else if (str1[0] !== str2[0]){
    return false;
  }
  
  //Recursive Case
  //Return compareStr function with str1 and str2 passed in, with both strings first index chopped off
  return compareStr(str1.slice(1), str2.slice(1));
};








// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, arr = []){
  //Base Case
  //When str.length and arr.length are equal
  //return arr
  if (str.length === arr. length){
    return arr;
  }
  //Recursive Case
  //arr[0] = str[0];
  //return arr.concat(createArray(str.slice(1), arr = []))
  arr[0] = str[0];
  return arr.concat(createArray(str.slice(1), arr = []));
  
};






// 17. Reverse the order of an array
var reverseArr = function (array, arr = []) {
  //Base Case:
  //stop recursign when array and arr have same length
  if (array.length === arr.length){
    return arr;
  }
  
  //Recursive case:
  //use concat method to join arr with last index of array not previously used
  //Return function calling array sliced at index 1 and narr
  arr.push(array[(array.length-1) - arr.length]);
  return reverseArr(array, arr);
  
};






// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //Base Case: when length equals 0
  if (length === 0){
    return [];
  }
  
  //Recursive Case:
  //array.push value plus function call with length - 1
  return [value].concat(buildList(value, length - 1));
};









// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, counter = 0) {
  //Base case
  //stop recursing when array length is 0
  if (array.length === 0){
    return counter;
  }
  
  //Recursive Case
  //If array[0] equals value, increase counter by 1
  // return function with sliced array (at 1), value and counter passed in
  if (array[0] === value){
    counter ++;
  }
  return countOccurrence(array.slice(1), value, counter);
};








// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, arr = []) {
  //Base Case
  //could create a new array
  //when array.length === 0
  if (array.length === 0){
    return arr;
  }
  
  //Recursive Case
  //call function for array[0] and push to new array
  //rMap(array.slice(1), callback, arr);
  arr.push(callback(array[0]));
  return rMap(array.slice(1), callback, arr);
  
};








// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};


//SKIP




// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};



//SKIP



// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};



//SKIP




// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  //SKIP
};


//SKIP




// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //Base cases 
  // n = 0 return 0
  // n = 1 return 1
  //if n < 1 return null
  if (n === 0) {
    return 0;
  } else if (n === 1){
    return 1;
  } else if (n < 0){
    return null;
  }
  
  //Recursive Case
  //return nthFibo(n - 1) + nthFibo (n - 2)
  return nthFibo(n - 1) + nthFibo (n - 2);
};






// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, newArr = []) {
  //Base Case
  //stop recursion when input length is zero
  if (input.length === 0){
    return newArr;
  }
  
  //Recursive Case
  //Push the uppercase string to the newArr
  //call the function with that string sliced off the input
  newArr.push(input[0].toUpperCase());
  return capitalizeWords(input.slice(1), newArr);
  
};






// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, arr = []) {
  //create a new array
  //BC: when array.length === 0
  if (array.length === 0){
    return arr;
  }
  
  
  //Recursive: 
  //add the capitalized word to the arr and then call function with array one index sliced off
  //push array[0][0].toUpperCase() + array[0].slice(1); to new array
  //call function for (array.slice(1))
  arr.push(array[0][0].toUpperCase() + array[0].slice(1));
  return capitalizeFirst(array.slice(1), arr);
  
};






// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};


//SKIP



// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

//SKIP




// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //set obj to empty obj literal
  //Base Case
  // stop recurring when length of string is zero
  if (str.length === 0){
    return obj;
  }
  
  //Recursive case
  //If str[0] exists as a key in obj, increment val by 1
  //If str[0] does not exist, creat key and set equal to 1
  //return letterTally func, return str sliced at index 1
  
  if (obj[str[0]]){
    obj[str[0]] += 1;
  } else {
    obj[str[0]] = 1;
  }
  return letterTally(str.slice(1), obj);
  
};






// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, arr = []) {
  //Base Case= when list.length = 0
  if (list.length === 0){
    return arr;
  }
  
  
  //Recursive
  // if value at beginning of list is not equal to most recent value in arr, then push it to arr and call
  // if list[0] !== newArray[newArray.length-1] then push list[0] to new array and call function with sliced off
  if (list[0] !== arr[arr.length - 1]){
    arr.push(list[0]);
  } 
  return compress(list.slice(1), arr);
};






// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};


//SKIP




// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, newArr = []) {
  //Base Case
  //stop recurring when array.length equals zero
  if (array.length === 0){
    return newArr;
  }
  
  //Recursive Case
  //If array[0] equals zero and last index of newArr equals zero, dont push and call func
  //Otherwise, push array[0] to newArr and call function for array.slice 1
  
  if(!(array[0] === 0 && newArr[newArr.length - 1] === 0)){
    newArr.push(array[0]);
  }
  return minimizeZeroes(array.slice(1), newArr);
};





// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, arr = []) {
  //base case when array.length === 0
  if (array.length === 0){
    return arr;
  }
  
  //recursive
  //if newArray.length % 2 === 1 then push negative Math.abs value of array[0] to new array and call function for array.slice(1)
  //if newArray.length % 2 === 0 then push Math.abs value of array[0] to new array and call func
  if (arr.length % 2 === 1){
    arr.push(-Math.abs(array[0]));
  } else {
    arr.push(Math.abs(array[0]));
  }
  return alternateSign(array.slice(1), arr);
};







// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, strArray = str.split(' '), newArr = []) {
  //create a array with will represent the string of the number at the index of the number
  let numStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  
  //Base Case
  // stop recurring when array equals 0
  if (strArray.length === 0){
    return newArr.join(" ");
  }
  
  //Recursive Case
  //If when converting to a number, the value doesn't evaluate as NaN (so it as a number)
  if (!isNaN(Number(strArray[0]))){ //push to newArr the number at str 0 turned into a number to rep the index in num strings
     newArr.push(numStrings[Number(strArray[0])]);
  } else {
     newArr.push(strArray[0]); //otherwise, just pass the str to the array
  }
  
  return numToText(str, strArray.slice(1), newArr); //return the function with one element sliced off the strArray
  
};








// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
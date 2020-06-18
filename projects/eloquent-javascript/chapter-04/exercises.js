////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //I: two numbers and a step
  //O: returns array of numbers from start to end (inclusive)
  
  let array = []; //will hold the array values
  if(start === end || step < 0){ //if start and end are the same or step is negative, return empty array
    return [];
  }
 
if (step){ //if step exists, use this loop that increments by step
   for (var i = start; i <= end; i += step){
     array.push(i);
   }
 } else { //if step doesn't exist, use this loop that increments by one
   for (var i = start; i <= end; i++){
     array.push(i);
   }
 }
  return array; //return array
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //if array is undefined, return 0
  if (array[0] === undefined){
    return 0;
  } 
  
  let counter = 0; // create counter to add up all values
  for (var i = 0; i < array.length; i++){
    counter += array[i]; // add each value to counter
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //will contain the new array
  let reversed = [];
  for (var i = array.length - 1; i >= 0; i--){ //loop backwards and push the value to new array
    reversed.push(array[i]);
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
 for (var i = 0; i < Math.floor(array.length / 2); i++){ //loop through half of the array
   let holder = array[i]; //will hold the value of index
   array[i] = array[array.length - 1 - i]; //set value of index to the value of the mirror index from the back
   array[array.length - 1 - i] = holder; //set that mirror index equal to original index
   
  }
  return array;//return array
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array){ //array is parameter
    var list = null; //set list equal to null for the first iteration
    for (var i=array.length-1; i>=0; i--)  //loop backwards
        list = {value: array[i], rest:list}; //will make the first rest equal null then nest the rest
    return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  
  let arr = []; //will hold array
  for (let i = list; i; i = i.rest){ //iterates over object with i as the current list, as long as i exists, and i incrementing to next list
    arr.push(i.value); //add value to array
  }
  return arr;
}



////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {value: element, rest: list}; //add the element value key pair and rest key value is list (rest of list)

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  //I:List and a number
  //O:A number of the value at the nth position in the list
  //Base Case: When number is 0 to signify how far up the layers in the list youre going
  //Edge Case: if the list doesn't exist that means the number is too high or negative so the list doesnt exist
  if (!list){
    return undefined;
  } else if (number === 0){
    return list.value;
  } 
  
  
  //Recursive Case:
  //As you move up the list layers, take one off the number count and when number is 0 thats your value
  return nth(list.rest, number -1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
  //I: two values
  //O: true or false
  //Edgecases: check to see if val1 and
  
  if (val1 === val2){
    return true;
  }
  
  if (typeof val1 === "object" && val1 !== null){
    
    let obj1keys = Object.keys(val1);
    let obj2keys = Object.keys(val2);
    
    if(obj1keys.length === 0 && obj2keys.length === 0){
      return true;
    } 
    //Use Object.keys to get array of keys
  
  //Iterate over o
  for (let i = 0; i < obj1keys; i++){
    if (obj1keys[i] !== obj2keys[i] || val1[obj1keys[i]] !== val2[obj2keys[i]]){
      return false;
    }
  }

    
    
    
    
  } 
  
 
  return false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};

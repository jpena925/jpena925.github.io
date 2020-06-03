/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {}; //declare a variable animal assigned to an empty object
animal.species = "dog"; //used dot notation to assign a key.value pair of species and dog
animal['name'] = "Jackscott"; //used bracket notation to create a key of name and value of name
animal.noises = []; //assign a key called noises with an empty array valiue
console.log(animal); //console log the animal variable 

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []; //create empty array variable called noises
noises[0] = "woof"; //assign string to first index of array
noises.push("scratch"); //added scratch with the pop method
noises.unshift("grrr"); //added grrr to the front of the array with the unshift method
noises[noises.length] = "bark"; //added a sound to the end of the array no matter how many elements are there
console.log(noises.length); //console.log noises.length
console.log(noises[noises.length-1]); //logging the last element in the array no matter the length
console.log(noises); //console.log the whole array

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises; //assigning the variable noises to the object key noises
animal.noises.push("bowwow"); //added animal noise bowwow to the array
console.log(animal);// consolelogged animal

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * We can use dot notation and bracket notation
 
 * 2. What are the different ways of accessing elements on arrays?
 *We can use bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []; //declaring the variable animals and assigning an empty array
animals.push(animal); //added the animal array to animals
console.log(animals); //logs the animals array
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'],
  }; //created a variable duck with the following key/value pairs
animals.push(duck); //added duck to the animals array
console.log(animals); //logs the animals array
var sloth = {
    species: 'sloth',
    name: 'Sydney',
    noises: ['whiny', 'grumpy'],
};
var donkey = {
    species: "donkey",
    name: "Eddie",
    noises: ['heehaw', 'neigh'],
};
animals.push(sloth,donkey); //added new animals to the animals array
console.log(animals); //logs animals array
console.log(animals.length); //logs animals length

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Choosing an array because it will make a clean list of items that stand alone rather than have key value pairs.
var friends = []; 


//created a function that will take in an array and return a random whole number no longer than the length of the array
function getRandom(arr){
    return Math.floor(Math.random() * arr.length) 
   
};
//using the getRandom function to get an index, pushing just the name to the friends index
friends.push(animals[getRandom(animals)].name)
console.log(friends);
animals[0].friends = friends; //added the friends array as a key value pair to animals[0] friends: [array friends]
console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
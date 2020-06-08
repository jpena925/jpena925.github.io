//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function takes in an object and returns all the values from the key/value pairs in an array
function objectValues(object) {
  var array = []; //an array to hold the values
  
  for (var key in object){ //loop over the given object 
      array.push(object[key]); //pushes the individual values of each key to the array
  }
  return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function that takes in an object and returns the keys as a string with a space between them
function keysToString(object) {
  var stringArray = []; //an array that will hold all the keys
  
  for (var key in object){ //loop through the object
      stringArray.push(key); //push all the key values to an array
  }
  
  return stringArray.join(" "); //return the array joined up with a space between all values
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//a function that takes in an object and returns the values if they are a string as a string 
function valuesToString(object) {
   var valueArray = []; //an array to hold the values
   
   for (var key in object){
       if (typeof object[key] === "string"){ //loop that tests if the value is a string
       valueArray.push(object[key]); //if true, push the value to the array
   }
   }
   return valueArray.join(" "); //return the array joined into a string with a space between values
   
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function that takes in a collection and returns if it is an array or an object
function arrayOrObject(collection) {
    if (Array.isArray(collection)){ //uses the array test to see if it is an array, if true, return array
        return "array";
    }
    return typeof collection; //otherwise, return the type of, which will be an object otherwise
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function takes a string and returns the string with the first letter capitalized
function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
}//takes the string at character 0 index (first letter) and capitalizes it then adds it to the rest of the string

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function that takes in a string of words and returns with all the words capitalized
function capitalizeAllWords(string) {
    var splitString = string.split(" "); //split the string into an array where each word gets its own index
    var newNames = []; //an array to hold the modified words
    
    for (var i = 0; i < splitString.length; i ++){
        newNames.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)); 
    } //loop through the splitString array and capitalize the first letter then push it into the newNames array
    return newNames.join(" "); //return the newNames array joined as a string with spaces between each word.
} 

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//a function that takes in an object and finds the value at name, capitalizes it, then returns "Welcome <name>!"
function welcomeMessage(object) {
  return "Welcome " + capitalizeWord(object.name) + "!"; //uses the capitalizeWord function above to return the string
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Similar to above, function takes in an object and returns value@name is a value@species with both capitalized
function profileInfo(object) {
 return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species); //uses capitalizeWord function and concatenates 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//takes in an object, returns array of noises as a string with a space if there are noises, otherwise returns 'there are no noises'
function maybeNoises(object) {
 if (object.noises && object.noises.length >= 1){ //tests if there is a noises value and if there is a value if theres at least one noise
     return object.noises.join(" "); //if true, return string separated by spaces
 } else {
     return "there are no noises"; //otherwise, return this
 }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function that takes in a string and a word and checks if the word is present in the string. returns true or false 
function hasWord(string, word) {
  var split = string.split(" "); //store a split string in an array so that each word is at a diff index
  for (var i = 0; i < split.length; i++){ //loop through the array
      if(split[i] === word){ //if any word in the array matches the given word, return true
          return true;
      } 
      
  } return false; //if no matches, return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//function that takes in a name and an object and adds the name to the objects friends key as a value then returns the whole object
function addFriend (name, object) {
 object['friends'].push(name); //pushes name to the array at the friends key value pair
 return object; //returns the new object with the name in it
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//takes in an object and a name and checks if the name is in the objects friends list. if so, return true if false return false
function isFriend(name, object) {
 if (object.friends === undefined){ //checking to see if the friends key exists
   return false;
 } else { //if it does
   for (var i = 0; i < object.friends.length; i++){ //loop through the object friends array
     if (object['friends'][i] === name){ //check if the name argument matches a name in the friends array
         return true; //if so return true
     }
 }
 } return false; //otherwise return false
 
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//a function that takes in a name and a array and returns the names that are not friends with the given name
function nonFriends(name, array) {
    var notFriends = []; //will store the names of nonfriends
    for (var i in array){ //loop in the array
        if (!array[i].friends.includes(name) && name !== array[i].name){ //if the given name is not in the friends list and not the name given, push the name
            notFriends.push(array[i].name);
        }
    }
    return notFriends;//return the not friends array back
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function that takes an object, key and value. if the key exists in the object, replace it with the value, otherwise create the key/value pair.
function updateObject(object, key, value) {
  object[key] = value; //assigns the key to given value, adds it if it isnt there
    return object; //returns object
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

  for (var i = 0; i < array.length; i++){ //loops through the array 
      delete object[array[i]]; //deletes properties in object per array index
  }
  return object; //returns object without those properties
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function takes in an array and returns a new array with unique values
function dedup(array) {
  var uniqueArray = [... new Set(array)]; //makes the array a set of unnique values with a command to set
  
  return uniqueArray; //returns new array
  
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
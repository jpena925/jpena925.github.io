/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called search that takes in animals array and a name

function search (animalArr, name){
    for (var i = 0; i < animalArr.length; i++){//for loop to loop through animals array
        if (animalArr[i]["name"] === name){//if in the array one of the values of "name" is equal to the argument name
            return animalArr[i]; //return the whole object at that index
        } 
        
        }return null; //if this doesn't happen all the way through the loop, return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function replace that has 3 parameters, the animal array, a name, and a object that will replace

 function replace (animalArr, name, replaceObj){
    for (let key in animalArr) {// for-in loop to search the array for a name
        if (name === animalArr[key].name){ //conditional so that if the given name matches a name key in the array
            animalArr.splice(key, 1, replaceObj); // remove the object at that given index and splice it out, replace with replace OBJ
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function remove that takes in the animals array and a name
function remove(animals, name){
   for (let key in animals){ //loops over the animals array evaluating different names
        if (name === animals[key].name){ //if the given name is equal to a key in the array
            animals.splice(key, 1); //splice it out of the animals array
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
  var name1 = animal.name; //creating a variable to store the animal.name string
  var species1 = animal.species; //creating a variable to store an animal.species string
    //animal name length is greater than 0
    //animal specieis length is greater than 0
    //animal name is not the same as another animals name
    //add ONLY if all are true
 for (var i = 0; i < animals.length; i++){ //loop through the animals array to check the following
     if (animals[i].name !== animal.name 
     && name1.length > 0
     && species1.length >0) { //satisfying all the conditions if true
         animals.push(animal); //add the given animal to the animals array
    }  
     return; //if not, return (do nothing) to the global scope.
 }  
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jpena925');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *      //start from environment
 *    npm start --prefix ./jpena925.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // I: array
    // O: number
    // C: use filter
    
    //invoke my filter function using my array as first argument
    let filteredMales = _.filter(array, function(customerObj){
        //filter out all of my male customers
        return customerObj.gender === "male";
    });
    return filteredMales.length;
};

var femaleCount = function(array) {
    // I: customers array
    // O: number of female customers
    // C: use reduce
    
    //call reduce with the args collection, function, and seed
    //we need a seed because first datatype of first element in array is not datatype of return
    return _.reduce(array,function(counter, customerObj){
        if(customerObj.gender === "female"){
            counter += 1;
        }
        return counter;
    }, 0);
};

var oldestCustomer = function(array) {
    //I: customers array
    //O: string of name associated with greatest value at "age"

   var oldest = "" //variable that will hold the oldest name
   var age = 0; //variable to start out as oldest age
   _.each(array, function(customerObj){ //use each to look through the customer array
        if (customerObj.age > age){ //if customer age is greater than variable age, set them eqal to each other and also assign that customers name to oldest
            age = customerObj.age;
            oldest = customerObj.name;
        }
    })
    return oldest; //return the name at oldest after the entire loop
};

var youngestCustomer = function(array) {
    //I: customers array
    //O: string of name associated with the lowest value at "age"
    
   var youngest = "" //will hold name of youngest
   var age = 1000; //standard to measure the age
   _.each(array, function(customerObj){ //use each to look through array
        if (customerObj.age < age){ //if customer's age is less than the current value of age, set them equal to each other and set youngest equal to that name
            age = customerObj.age;
            youngest = customerObj.name;
        }
    })
    return youngest; //return the name that is at youngest
    
};

var averageBalance = function(array) {
    //I: customers array
    //O: number output of the average value of balance
  
   var total = _.reduce(array, function(sum, currentValue){ //use reduce to combine all values of balances
        sum += parseFloat(currentValue.balance.replace("$","").replace(",","")); //accumulate all values, parsefloat changes the string to a number
        return sum; //return the total sum
        }, 0); 
    return (total / array.length); //return the total divided by the number of customers to get the average
};

var firstLetterCount = function(array, letter){
    //I: an array of customers and a letter
    //O: Number of customer names that begin with a given letter
    
    var counter = 0 //counter to start at 0
    _.each(array,function(currentObj){ //use each to loop through and see if the name begins with the letter
        if(currentObj.name[0] === letter.toUpperCase()){
            counter += 1; //if so, add one to counter
        }
    })
    return counter; //return counter
};

var friendFirstLetterCount = function(array, customer, letter){
    //I: array of customers, customer name, and a letter 
    //O: returns a number of how many customers friends names start with that letter
    
  var friendCounter = 0; //will be the counter for number of friends
  var friendsArray = [] //holds the friends array from given customer
  
  _.map(array,function(currentObj){ //use map to add to friendsArray
      if(currentObj.name === customer){ //if the name value of currentObj is equal to customer, thats the array of friends we want
          friendsArray.push(currentObj.friends);
      }
  })

  friendsArray = friendsArray[0]; //shrinking down the array from extra brackets
  
  _.each(friendsArray, function(currentObj){ //using each to loop through this array to see if any names first character is equal to given letter
      if(currentObj.name[0] === letter.toUpperCase()){
          friendCounter += 1; //if so add one to counter
      }
  })
  return friendCounter; //return final counter
};


var friendsCount = function (array, name){
    //I: takes in an array and a name
    //looks through each object in the array then to the friends key and checks their friends
    //if the given name matches one of those names, add it to the array
    //O: return an array of all the people that had the given name in their friends list
    
   var finalNames = [] //the array that will be returned
    
    _.each(array,function(customerObj){ //accessing each object through each
        for (var key in customerObj.friends){ //using a for loop to go through the objects in friends key
            if(customerObj.friends[key]["name"] === name) //if name in friends key matches the name given,
            finalNames.push(customerObj.name); //add name to finalNames
        }
        
    })
    return finalNames; //return the finalNames array
   
};

var topThreeTags = function (array){
    //I: array of customers
    //O: an array of strings of the top three most occuring tags from all customers
    
    var allTags = _.pluck(array, "tags"); //Get tags values from each customer
    var stringTags = allTags.join(); //Join all the arrays together to make one long string each word separated by a comma
    var finalTags = stringTags.split(","); //split the string at comma to make an array of all words
    
    var wordCount = _.reduce(finalTags, function(finalObj, word){ //use reduce to look through the array 
        if(finalObj[word]){ //if accumulator has the word it sees in it, add its value by 1
            finalObj[word] += 1;
        } else { //else if it doesnt, add it to the object and set its value to 1
            finalObj[word] = 1;
        }

            return finalObj; //return finalObj
        }, {});
    
    var arrayOfCounts = []; //will hold an array of all the values to be sorted later
    
    for(let key in wordCount){
        arrayOfCounts.push([key, wordCount[key]]); //turns the object into an array
    }
    
    arrayOfCounts.sort(function(a, b){ //sorts the array from highest values to lowest
        return b[1] - a[1];
    }); 
    
    const top3Words = []; //will hold the top three words

    
    for(let i = 0; i < 3; i++){
        top3Words.push(arrayOfCounts[i][0]); //loop through to add the top three highest value words
    }
    
    return top3Words; //return the three words
    
};

var genderCount = function (array){
    //I: array of customers
    //O: return an object with key value pairs male: #, female: #, non-binary: #
        
    var men = 0; //will hold men counter
    var nonBinary = 0 //will hold nonbinary counter
        
    var women = _.reduce(array,function(counter, customerObj){ //will return the women counter and loop through with reduce to add to each counter
        if(customerObj.gender === "female"){ //if female, add to counter
            counter += 1;
        } else if (customerObj.gender === "male"){ //if male, add to men
            men += 1;
        } else if (customerObj.gender === "non-binary"){// if nonbinary add to nonBinary
            nonBinary += 1;
        }
        return counter; //return women value
    }, 0);
    
    var genderObj = {}; //object to hold values
    genderObj['male'] = men; //key men should hold variable men at value
    genderObj['female'] = women; //key women should hold variable women at value
    genderObj['non-binary'] = nonBinary; //key non-binary should hold nonBinary at value
    
    return genderObj; //return full object
    
    
};    

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

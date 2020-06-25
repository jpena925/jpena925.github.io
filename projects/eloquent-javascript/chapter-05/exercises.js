// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  //loop through array with reduce method, using concat to add each individual array to the accumulator
  return array.reduce(function(final, arr){
    final = final.concat(arr);
    return final;
  }, []);
  
}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
function loop(value, testfunc, updatefunc, bodyfunc) {
//starts with value
//runs it through test func
//runs it through body func
//updates value in updatefunc
//loops
for (var n = value; testfunc(n) ; n = updatefunc(n)){
  bodyfunc(n);
  
}

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  //loops through array and runs each value through test
  //returns true only if every element run through test evals as true
  
  for (var i = 0; i < array.length; i++){
    if (!test(array[i])){
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//"Hello!" will return ltr
//"Hey, مساء الخير"will return rtl
function dominantDirection(text) {
  //Given a text
  //Output direction of the language that is most used 
  //figure out which language is used most 
  //return the direction of it
  
  
  //loop through text to figure out which language each character belongs to
  //and give the count a ++ for that language
   
 let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  
  
  
var flag = 0
return counted.reduce(function(acc, langObj){
  if (langObj.count > flag){
    flag = langObj.count;
    acc = langObj.name;
  }
  return acc;
}, '')

}
  


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};

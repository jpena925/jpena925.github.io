/*
 * CONTROL FLOW:
 *
 * Control flow refers to the order in which the computer executes code. In relation to If-then statements,
 * the control flow is essential to return the value you want. The computer will always start at the top
 * and will stop once a condition is met. In a switch statement, the computer will always read top to bottom
 * as well.
 */
 
 
 
 // 1. IF
 // If is a conditional that is evaluated such that if true, the computer continues with the conditions below it
 
 // Because the condition was evaluated as true, the computer continues to console.log and will return "Modern Car"
 var car = 2014;
 if (car > 2000){
     console.log("Modern Car");
 }
 
 
 
 //2. IF-THEN
 /* If-then statements are conditionals that have multiple cases for the computer to consider. Control flow is important
  * here because if out of order, some results may not get shown.
  */
  
  
 /*This statement will return "This is a car. Could be a model T!". It does not give us the most accurate
  *return because the computer will stop look at conditions once one of them is met. Because the control flow
  *was not crafted carefully, You don't get an accurate description of the car.
  */
   if (car > 1908){
     console.log("This is a car. Could be the model T!");
 } else if (car > 1980){
     console.log("this car looks pretty recognizable and modern");
 } else if (car > 2000){
     console.log("Modern car!");
 } else if (car > 2020){
     console.log("This is a brand new car");
 }
 
 
 
 //3. ELSE
 // Else is a statement you can put at the end in case no conditions are met in a conditional statement.
 
 /*Here, this will console.log "Don't lie, cars weren't invented yet" from the else statement because the 
  *variable car was not evaluated as true by any of the conditions.
  */
 car = 1800;
 
    if (car > 1908){
     console.log("This is a car. Could be the model T!");
 } else if (car > 1980){
     console.log("this car looks pretty recognizable and modern");
 } else if (car > 2000){
     console.log("Modern car!");
 } else if (car > 2020){
     console.log("This is a brand new car");
 } else {
     console.log("Dont lie, cars weren't invented yet.");
 }
 
 
 //4. SWITCH
 
 /*Switch statements work very similarly to If-then statements and control flow works exactly the same way. 
  *Switch statements take a value and evaluate down the statement to match it to a case label. If it does find a match,
  *it will execute the code under it. There is then an optional break that tells the computer to exit the switch statement.
  */
  
  //Here a switch statement is executed where the computer evaluates and doesn't find "piano" so executes the default and exits.
  var instrument = "piano";
  
  switch (instrument){
      case "violin":
          console.log("You play high notes");
          break;
      case "tuba":
          console.log("You play low notes");
          break;
      default:
          console.log("You play all the notes");
  }
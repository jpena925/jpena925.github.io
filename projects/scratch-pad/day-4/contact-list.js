// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

//a function that takes in id, nameFirst and nameLast and will return these strings as key/value pairs in an object
function makeContact(id, nameFirst, nameLast) {
   return {
       "id":id, 
       "nameFirst":nameFirst, 
       "nameLast":nameLast};
} 

//a function that takes no parameters but returns an object that manages contacts in a number of ways
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */

    var contacts = []; //will hold the contacts

    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length; //will return the length of contacts array
        },
        addContact: function(contact) {
            contacts.push(contact); //a function that takes in a contact and pushes it to the contacts array
        },
        findContact: function(fullName){ //a function that takes a fullname and returns the contact or undefined
            var names = fullName.split(" "); //splits the fullName to an array to identify first and last names
            for (var i = 0; i < contacts.length; i++){ //looping through contacts to check if first and last name match any id card
                if (names[0] === contacts[i]["nameFirst"] && names[1] === contacts[i]["nameLast"]){
                return contacts[i]; //if the first name and last name from fullName match names in the contact list, return that contact
            } 
            } return undefined; //otherwise, return undefined
        },
        removeContact: function(contact){ //function that takes in a contact and removes it from contacts array
            for (var i = 0; i < contacts.length; i++){ //loop over the contacts array
                if (contacts[i] === contact){ //if one of the contacts in the array is the same as the given contact,
                    contacts.splice(i,1); //remove the contact object from it
                }
            }
        },
        
        // a function that will return a list of full names taken from the contacts array
        printAllContactNames: function(){
            var fn = []; //array to store first names
            var ln = [];//array to store last names
            
            for (var i = 0; i < contacts.length; i++){ //looping over the contacts
                fn.push(contacts[i]["nameFirst"]); //for each index, push the value of key nameFirst to the fn array
                ln.push(contacts[i]["nameLast"]);//for each index, push the value of key nameLast to the ln array
            }
            
            var full = []; //array to hold full names
            
            for (var i = 0; i < contacts.length; i++){ //looping over fn and ln to create the names as one string
                full.push(fn[i] + " " + ln[i]); //combine string values at the same index in fn and ln and push them to the full array
            }
            
            return full.join('\n'); //Join the array into a single string with the /n new line separating them
        } 
      
        
  
        
    } 
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

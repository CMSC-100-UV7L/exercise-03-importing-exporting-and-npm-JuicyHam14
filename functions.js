// Cortes, Jared B.     2018-03612     UV-7L        03/17/23
// Exercise 3: Javascript files implementing importing and exporting along
// with the use of NPM package manager.

import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

// Generates a unique id or a password.
function generateUniqueID(firstName, lastName){
    var uniqueID = [];
    uniqueID.push(firstName[0].toLowerCase());
    uniqueID.push(lastName.toLowerCase());

    uniqueID.push(String(uuidv4()).slice(0,7)); // (1) gets first 8 characters
    uniqueID = uniqueID.join("")

    return uniqueID;
}

// Adds valid account to a text file and outputs true. 
//Else, outputs error message and false .
function addAccount(firstName, lastName, email, age){
    // Check validity of account
    if (firstName != null && lastName != null && email != null && age != null);
    else {console.log("Make sure all fields are present!"); return false;}

    if (firstName.length != 0 && lastName.length != 0 && email.length != 0);
    else {console.log("Make sure you input something!"); return false;}

    if (validator.isEmail(email));
    else {console.log("Invalid email format!"); return false;}

    if (age >= 18);
    else {console.log("Age must be at least 18!"); return false;}

    const uniqueID = generateUniqueID(firstName, lastName); // call unique id generator
    var data = [firstName, lastName, email, 22, uniqueID];
    data = data.join(",")
    data = [data,"\n"].join("");
    console.log(data);
    appendFileSync('users.txt', data);  // creates file and appends the new account
    
    return true;
}

export { generateUniqueID, addAccount } // exports functions to be used in another js file


// References:
// (1) slice: https://javascript.plainenglish.io/how-to-select-a-range-from-an-array-in-javascript-96a163fe8f34
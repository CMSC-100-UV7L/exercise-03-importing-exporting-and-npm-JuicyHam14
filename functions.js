// Cortes, Jared B.     2018-03612     UV-7L        03/17/23
// Exercise 3: Javascript files implementing importing and exporting along
// with the use of NPM package manager.

import { v4 as uuidv4 } from 'uuid';


function generateUniqueID(firstName, lastName){
    var uniqueID = [];
    uniqueID.push(firstName[0].toLowerCase());
    uniqueID.push(lastName.toLowerCase());

    uniqueID.push(String(uuidv4()).slice(0,7)); // (1)
    uniqueID = uniqueID.join("")

    return uniqueID;
}

function addAccount(){
    console.log("added account!");
}

export { generateUniqueID, addAccount }


// References:
// (1) slice: https://javascript.plainenglish.io/how-to-select-a-range-from-an-array-in-javascript-96a163fe8f34
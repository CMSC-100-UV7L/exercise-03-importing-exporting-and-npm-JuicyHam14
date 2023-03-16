// Cortes, Jared B.     2018-03612     UV-7L        03/17/23
// Exercise 3: Javascript files implementing importing and exporting along
// with the use of NPM package manager.


import { generateUniqueID, addAccount } from "./functions.js";

console.log(generateUniqueID('Juicy','Ham'));
console.log(generateUniqueID('Juicy','Ham'));

// test cases:
console.log(addAccount('Ham','jbcortes2@up.edu.ph','22'));
console.log(addAccount('Juicy','','jbcortes2@up.edu.ph','22'));
console.log(addAccount('Juicy','Ham','jbcortes2up.edu.ph','22'));
console.log(addAccount('Juicy','Ham','jbcortes2@up.edu.ph','17'));

console.log(addAccount('Jared','Cortes','cortesjared000@up.edu.ph','22'));
console.log(addAccount('Juicy','Ham','jbcortes2@up.edu.ph','22'));
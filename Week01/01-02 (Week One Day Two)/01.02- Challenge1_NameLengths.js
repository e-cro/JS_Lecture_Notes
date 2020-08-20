/*
// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

//BRONZE
let firstPerson = 'Erin';
console.log(firstPerson.length);

let secondPerson = 'Noland';
console.log(secondPerson.length);

//SILVER

if (secondPerson.length > firstPerson.length){
    console.log(`${secondPerson}'s name is longer than ${firstPerson}'s name.`);
} else if (secondPerson.length < firstPerson.length){
    console.log(`${firstPerson}'s name is longer than ${secondPerson}'s name.`); 
} else {
    console.log(`${firstPerson} and ${secondPerson}'s names are the same length.`);
}

//GOLD
 
if (secondPerson.length > firstPerson.length) {
console.log(`${secondPerson}'s name is longer by this many letters:`, secondPerson.length - firstPerson.length)
} else if (secondPerson.length < firstPerson.length) {
console.log(`${firstPerson}'s name is longer by this many letters:`, firstPerson.length - secondPerson.length)
} else {
    console.log(`${firstPerson} and ${secondPerson}'s names are the same length!`);
}

//alternate Gold solution Zach presented:
if (secondPerson.length > firstPerson.length) {let letters = secondPerson.length - firstPerson.length; 
    console.log(`${secondPerson}'s name is longer by this many letters:`,letters )
    } else if (secondPerson.length < firstPerson.length) {let letters = firstPerson.length - secondPerson.length;
    console.log(`${firstPerson}'s name is longer by this many letters:`, letters)
    } else {
        console.log(`${firstPerson} and ${secondPerson}'s names are the same length!!`);
    }




// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
let lambo ={
    topSpeedMPH: 230,
    color: 'red',
    isExpensive: true,
    dashboard : {
        material: 'leather',
        dashboardColor: 'black',
    }
}

console.log(lambo.dashboard.material);
console.log(typeof lambo);


/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/
//let whatType = lambo.snuffle; //snuffle is not declared, expect 'What are you?!'
let whatType = lambo.isExpensive;
if(typeof whatType === 'string')  {
    console.log(typeof whatType);
} else if(typeof whatType === 'number')  {
    console.log(typeof whatType);
} else if(typeof whatType === 'boolean')  {
    console.log(typeof whatType);
} else if(typeof whatType === 'object')  {
    console.log(typeof whatType);
} 
else {console.log('What are you?!');
}

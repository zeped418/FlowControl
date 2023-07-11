/*  Exercise #1     We'll build the industry plant calendar from the opening exercise.

Part 1              First, build a function called "businessHours". 
Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber. By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

function businessHours(dayNumber, hourNumber)

Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).   

src: https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow
*/


//Solución parte 1

function  businessHours (dayNumber, hourNumber) {
return ((dayNumber != 0) && (dayNumber != 6)) && ((hourNumber>=9) && (hourNumber <= 18));
};

let fecha= new Date
let dia = fecha.getDay();
let hora= fecha.getHours();
console.log("Exercise 1 - businessHours");
console.log("Day:", dia , "hour:", hora,". It is business hours?",businessHours(dia,hora));
console.log("Day: 0", "hour: 13",". It is business hours?",businessHours(0,13));
console.log("Day: 3", "hour: 8",". It is business hours?",businessHours(3,8));
console.log("Day: 4", "hour: 19",". It is business hours?",businessHours(4,19));

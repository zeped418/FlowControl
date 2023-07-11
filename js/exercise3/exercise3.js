/* Part 3  

Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.
Challenge: Replace the yearDayNumber and hourNumber parameters with a Date() variable.*/


/* Hints:
https://www.w3schools.com/jsref/jsref_gethours.asp

https://www.w3schools.com/jsref/jsref_getday.asp */


function  businessHours (dayNumber, hourNumber) {
    return ((dayNumber != 0) && (dayNumber != 6)) && ((hourNumber>=9) && (hourNumber <= 18));
    };

function getDayNumber(janFirstDayNumber, yearDayNumber){
    return ((yearDayNumber+janFirstDayNumber)%7)-1;
};

function businessHoursInYear(yearDayNumber, hourNumber){    
    let day=getDayNumber(0,yearDayNumber); //0 'cause 2023 started on Sunday
    return businessHours(day, hourNumber);
}

console.log("Exercise 3");
console.log("Day 26, hour: 5",businessHoursInYear(26,5));
console.log("Day 26, hour: 10",businessHoursInYear(26,10));

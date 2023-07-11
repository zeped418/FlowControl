/*Part 2            Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.
janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.
The yearDayNumber will be an int ranging from 0 to 365.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7.

src: https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow*/

function getDayNumber(janFirstDayNumber, yearDayNumber){
    return ((yearDayNumber+janFirstDayNumber)%7)-1;
};

console.log("Exercise 2 -  getDayNumber");
console.log( "janFirstDayNumber: 0  -","yearDayNumber: 18  -  Daynumber: ", getDayNumber(0,18) );//3
console.log( "janFirstDayNumber: 1  -","yearDayNumber: 18  -  Daynumber: ", getDayNumber(1,18) );//4
console.log( "janFirstDayNumber: 2  -","yearDayNumber: 18  -  Daynumber: ", getDayNumber(2,18) );//5


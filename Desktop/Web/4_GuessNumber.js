"use strict";

alert('4) Guess Number');

const RAND = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

let attempts = 5;
let num_check = ans => RAND == ans ? num_equally() : RAND  > ans ? num_more() : num_less();

let num_equally = () => 
{
    alert('Congratulations! \n Number ' +RAND+ ' guessed!');
    return (true);
}

let num_more = () => 
{
    alert('The hidden number is GREATER than the entered');
   return (false);
}

let num_less = () => 
{
    alert('The hidden number is LESS than the entered');
    return (false);
}

do 
{
    attempts--;
    if(num_check(prompt('Enter the number'))) break;
} while (attempts > 0);

if (attempts == 0)  alert("Attempts ended");
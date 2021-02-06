"use strict";

alert('3) getDigitsSum');

let getDigitsSum = num => 
{
    let temp = 0;
    while (num > 0) 
    {
        temp += num % 10;
        num  = Math.trunc(num / 10);
    }
    return (temp);
}

alert(getDigitsSum(parseInt(prompt("Enter the number"))));
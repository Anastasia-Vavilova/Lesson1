"use strict";

let array  = [45,78,10,3];

let my = (a, b) => a > b ? -1 : a < b ? 1 : 0;

let getDigitSum = num => {
    let temp = 0;
    while (num > 0) {
        temp += num  % 10;
        num  = Math.trunc(num  / 10);
    }
    return (temp);
}

console.error('Task 5');
console.log(array.sort(my).map(num => getDigitSum(num)));
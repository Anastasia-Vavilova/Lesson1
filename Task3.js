"use strict";

const obj = {
    method1: function () { return this; },
    method2: function () { return this; },
    method3: function () { return 'метод3'; },
};

console.error('Task 3');
console.log(obj.method1().method2().method3());
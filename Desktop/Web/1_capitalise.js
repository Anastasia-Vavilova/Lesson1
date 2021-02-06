"use strict";

alert('1) capitalise');

let capitalise = str => str.charAt(0).toUpperCase() + str.substring(1, str.length);

alert(capitalise((prompt('Enter the string'))));
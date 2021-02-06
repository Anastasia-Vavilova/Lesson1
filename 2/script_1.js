"use strict";

let ID = parseInt(window.location.href.substring(window.location.href.indexOf('ID=')+3, window.location.href.length));

document.write('<h1>' + orderList[ID].description + ' ' + orderList[ID].name + '</h1>');
document.write('<p> Product information: </p>');

document.write('<ul>');
for (let key in orderList[ID]) {
	document.write('<li>' + key + ' = ' + orderList[ID][key] +'</li>');
}
document.write('</ul>');
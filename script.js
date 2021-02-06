"use strict";
let userFirstName=prompt("First name:"),
	userLastName=prompt("Last name:");
 
alert("+userFirstName+" "+userLastName);
	
let userBirthDay=prompt("Birth Day:"),
	userBirthMonth=prompt("Birth Month:"),
	userBirthYear=prompt("Birth Year:");
 
alert("Date of birth: " + userBirthDay + " " + userBirthMonth + " " + userBirthYear);

function userAge(x) {
	let age=calendar.get(Calendar.YEAR)-x;
	userAge(userBirthYear);
};
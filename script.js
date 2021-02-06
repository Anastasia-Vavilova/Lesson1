"use strict";
let userFirstName=prompt("Your first name:"),
	userLastName=prompt("Your last name:");
	
let userBirthDay=prompt("Your birth Day:"),
	userBirthMonth=prompt("Your birth Month:"),
	userBirthYear=prompt("Your birth Year:");

let userAge=2020-userBirthYear;

alert("Your name: " +userFirstName+" "+userLastName+"\nYour date of birth: "+userBirthDay+"."+userBirthMonth+"."+userBirthYear+"\nYour age: "+userAge);

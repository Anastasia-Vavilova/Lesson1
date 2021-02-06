"use strict";

const thirdCity = {};
const fourthCity = Object.assign({}, secondCity);

for (let key in firstCity) {
    thirdCity[key] = firstCity[key];
}

thirdCity.name = 'Moskow';
thirdCity.date = new Date(1147, 9, 10);
fourthCity.name = 'Chelyabinsk';
fourthCity.date = new Date(1781, 11, 7);

const showAllCitiesInformation = function() { return this.full_information(); }

thirdCity.inf = showAllCitiesInformation;
fourthCity.inf = showAllCitiesInformation;

console.error('Task 2');
console.log(thirdCity.inf());
console.log(fourthCity.inf());
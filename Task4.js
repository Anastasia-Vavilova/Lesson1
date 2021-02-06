"use strict";

const fifthCity = {
    name: 'Novosibirsk',
    established: new Date(1903, 5, 17),
    population: 1625631,
    country: 'Russia',
}

const sixthCity = {
    name: 'Vorkuta',
    established: new Date(1943, 11, 26),
    population: 52776,
    country: 'Russia',
}

thirdCity.country = 'Russia';
thirdCity.population = 12636312;
fourthCity.country = 'Russia';
fourthCity.population = 1196680;

let cities = [firstCity, secondCity, thirdCity, fourthCity, fifthCity, sixthCity];

function sortByPopulation(cities) {
    cities.sort((city1, city2) => city1.population > city2.population ? 1 :
        city1.population == city2.population ? 0 : -1);
}

sortByPopulation(cities);
console.error('Task 4');
console.log(cities);
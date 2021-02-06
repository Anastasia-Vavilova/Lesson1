"use strict";

let orderList = [
    {name:"Cow milk", description:"Milk", cost:49, currency:"RU", size:10, weight:20, manufact_firm:"RusMol", production_date:"05.02.21"}, 
    {name:"Steak", description:"Meat", cost:270, currency:"RU", size:50, weight:20, manufact_firm:"Miratorg", production_date:"23.01.21"},
    {name:"Morning bread", description:"Bread", cost:30, currency:"RU", size:30, weight:10, manufact_firm:"Bakery", production_date:"07.02.21"}
];

let [product_1, product_2, product_3] = orderList;

let {
	name = "...",
	description = "...",
	cost = "...",
	currency = "...",
	size = "...",
	weight = "...",
	manufact_firm = "...",
	production_date = "00.00.0000"
} = product_1;

let container = document.getElementById('orderContainer');

let table = document.createElement("TABLE");

for (let index in orderList) {
  let tr = document.createElement('tr');
  for (let key in orderList[index]) {
	  
    let td = document.createElement('td');
	
    if (key === "name") {
      let a = document.createElement('a');
      a.innerHTML = orderList[index][key];
      a.href = "3.html?ID=" + index;
      a.style.color = 'black';
      a.style.textDecoration = 'none';
      td.append(a);
      tr.append(td);
    }
    else {
      td.innerHTML = orderList[index][key] + " ";
      tr.append(td);
    }
  }
  table.append(tr);
}
table.setAttribute("border", "2")
container.append(table);
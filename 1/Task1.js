"use strict";

let order = {
  name: "Домик в деревне",
  description: "Молоко",
  cost: 49,
  currency: "RU",
  manufact_firm: "Вимм-Билль-Данн",
  production_date: "06.02.21"
};

let unfilledOrder = Object.assign({}, order);

delete unfilledOrder.description;
delete unfilledOrder.cost;
delete unfilledOrder.currency;

let showInfo = (object) => {
  
	let {
		name = "...",
		description = "...",
		cost = "...",
		currency = "...",
		manufact_firm = "...",
		production_date = "00.00.0000"
	  } = object;
  
	validate();
	  
	function validate() {
		  if (typeof(cost) != "number" || cost < 0)
		  { 
			console.error(`Стоимость должна быть числового типа и неотрицательна (${cost})`);
		  } else {
			  
			let f=false;
			  
			for (let key in object) {

				if (!object[key]) {
					f=true;
						console.error( `Пустое поле: ${key}`);
					}
				}
				
				if (!f){
				console.log(
				`Данные о заказе:
				Название = ${name};
				Описание = ${description};
				Стоимость = ${cost};
				Валюта = ${currency};
				Фирма производителя = ${manufact_firm};
				Дата изготовления = ${production_date};`);
				}
			}
	}

}

 console.log("Task 1");
 console.warn("order:");
 showInfo(order);
 console.warn("unfilledOrder:");
 showInfo(unfilledOrder);
"use strict";

let order = {
  name: "����� � �������",
  description: "������",
  cost: 49,
  currency: "RU",
  manufact_firm: "����-�����-����",
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
			console.error(`��������� ������ ���� ��������� ���� � �������������� (${cost})`);
		  } else {
			  
			let f=false;
			  
			for (let key in object) {

				if (!object[key]) {
					f=true;
						console.error( `������ ����: ${key}`);
					}
				}
				
				if (!f){
				console.log(
				`������ � ������:
				�������� = ${name};
				�������� = ${description};
				��������� = ${cost};
				������ = ${currency};
				����� ������������� = ${manufact_firm};
				���� ������������ = ${production_date};`);
				}
			}
	}

}

 console.log("Task 1");
 console.warn("order:");
 showInfo(order);
 console.warn("unfilledOrder:");
 showInfo(unfilledOrder);
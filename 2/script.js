"use strict";

let orderList = [];


let container = document.getElementById('orderContainer');

let table = document.createElement("TABLE");

let create = (arr) => {
	
  let tr = document.createElement('tr');
  
  for (let key in arr) { 
		let td = document.createElement('td');
		td.innerHTML = arr[key] + " ";
        if (key === "name") {
			
			td.addEventListener("click", function aclick() {
                    let url = new URL('http://45.67.59.109:2001/order');
                    url.searchParams.set("id", arr.id);
                    xhr.open('GET', url);
                    xhr.timeout = 10000;
                    xhr.send();
                    xhr.onload = function() {
                        let answer = JSON.parse(xhr.response);
                        console.log(answer);
						
						let showinfo = document.getElementById('t');
						let tempcontainer = document.getElementById('orderContainer');
						
						showinfo.innerText = 
						`Product information:
						Name = ${arr.name}
                        Description = ${arr.description}
						Manufacturer = ${arr.manufacturer}
                        Amount: = ${arr.amount} ${arr.currency}\n`;
						
                        tempcontainer.style.display = 'none';
                        showinfo.style.display = 'block';
                        let button_home = document.createElement('button');
                        button_home.textContent = "Back";
                        button_home.addEventListener("click", function buttonClick() {
                            tempcontainer.style.display = 'block';
                            showinfo.style.display = 'none';
                        });
                        showinfo.append(button_home);
                    };
                });
			
            
          }
            tr.append(td);
        }
  
  
  table.append(tr);  
  
  let but_del = document.createElement('button');
  but_del.textContent = "Delete";
  but_del.addEventListener("click", function buttonClick() {
        tr.remove();
    });
	
  tr.append(but_del);
};

let add = (arr) => {
	
  let tr = document.createElement('tr');
  for (let key in arr) {
	  
	 let td = document.createElement('td');
	 let input = document.createElement('input');
     input.id = key;
	 
     if (key == 'cost' || key == 'size' || key == 'weight') {
            input.type = "number";
        }
        else {
            input.type = "text";
        }
		
     td.append(input);
	 tr.append(td);
  }
  
  table.append(tr);
  
  
  let but_add = document.createElement('button');
  but_add.textContent = "Add";
  but_add.addEventListener("click", function buttonClick() {
		
	let product_0 = Object.assign({}, arr);
	for (let key in arr){
		 if (document.getElementById(key).value){
			 product_0[key] = document.getElementById(key).value;
			 }
		 }
	tr.remove();
	create(product_0);
	add(arr);
		
    });
  tr.append(but_add);
};







let xhr = new XMLHttpRequest();
let url = new URL('http://45.67.59.109:2001/orders');
xhr.open('GET', url);
xhr.timeout = 10000; // Millisec (10 sec)
xhr.send();
xhr.onload = () => {
    if (xhr.status != 200) {
        alert('Ошибка ${xhr.status}: ${xhr.statusText}');
    } else {
        orderList = JSON.parse(xhr.response);
        for (let index in orderList) {
		  create(orderList[index]);
		}
        container.append(table);
		table.setAttribute("border", "2")
		container.append(table);
		let product = Object.assign({}, orderList[0]);
		
		for (let key in orderList[0]) {
		  product[key]="...";
		}
		add(product);
    }
  };
xhr.onprogress = (ev) => {
    console.warn(`Received ${ev.loaded} из ${ev.total} байт`);
  };
  xhr.onerror = () => {
    alert('Request failed');
  };
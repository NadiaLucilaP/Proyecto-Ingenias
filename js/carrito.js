var map = new Map (); // Crea una colección
			
function add_shoppingcart (btn) {// btn se transmite desde arriba
//console.log(btn);
var ntr = document.createElement("tr");
// Obtenga el precio y el nombre del producto
var tr = btn.parentNode.parentNode; // Obtener el padre del botón 
var tds = tr.children;
// Obtener el nombre del producto
var name = tds[0].innerHTML;
// Obtén el precio del producto
var price = tds[1].innerHTML;
console.log("name:" + name + ",price:" + price);

// Determinar si hay otro producto agregado a la colección. Si hay uno que no se puede agregar, solo se puede agregar la cantidad y no se puede agregar
if (map.has(name)) {
// Si no puede unirse, solo puede agregar la cantidad
var tr1=map.get(name);
//console.log(tr1);
//var btn1=tr1.getElementById("btn1");       
var btn1=tr1.getElementsByTagName("button")[1];
//console.log(btn1);
jia(btn1);
} else {
// Si no existe tal producto, puede agregarlo normalmente
ntr.innerHTML =
`<td style="text-align:center;">${name}</td>
<td style="text-align:center;">${price}</td>
<td style="text-align:center;">
<button onclick="jian(this)">-</button>
<input type="text" value="1" size="1" />
<button id="btn1" onclick="jia(this)">+</button>
</td>
<td>${price}</td>
<td style="text-align:center;"><button onclick="del(this)">X</buttton></td>`;

// Nombre de la tienda y una fila de datos en la colección
map.set(name, ntr);

// Encuentra el objeto de tbody
var tbody = document.getElementById("goods");
// Agrega una fila y cinco columnas creadas arriba a tbody
tbody.appendChild(ntr);
sum();
}
}

function del(btn) {
var tr = btn.parentNode.parentNode;
tr.remove (); // Se elimina el contenido del documento DOM y no se elimina el contenido de la colección.
var tr = btn.parentNode.parentNode; // Obtener el padre del botón
var tds = tr.children;
// Obtener el nombre del producto
var name = tds[0].innerHTML;
map.delete (nombre); // Elimina el contenido de la colección
sum();
}

function jian(btn) {
var inpt = btn.nextElementSibling;
var amount = inpt.value;
if (amount <= 1) {
return;
} else {
inpt.value = --amount;
var trs = btn.parentNode.parentNode;
console.log(trs);
var price = parseInt(trs.children[1].innerHTML);
trs.children[3].innerHTML = price * amount;
sum();
}
}

function jia (btn) {// Parámetros formales
// Obtiene el objeto del control de entrada en el lado izquierdo del botón +
var inpt = btn.previousElementSibling;
//console.log(Inpt);
var amount = inpt.value;
//console.log(amount);
inpt.value = ++ amount; // Pon el número acumulado en
var td = btn.parentNode.previousElementSibling;
//console.log(td);
var price = parseInt (td.innerHTML); // Obtiene el valor del precio unitario
//console.log(price);
var rtd = btn.parentNode.nextElementSibling;
rtd.innerHTML = price * amount;
sum();
}

// Encuentra la suma acumulada de todos los productos básicos
function sum() {
// Obtener el objeto de tbody
var tbody = document.getElementById("goods");
var trs = tbody.children; // obtener el hijo de tbody
var total = 0; // usado para encontrar la suma acumulada
for (i = 0; i <trs.length; i ++) {// Obtenga el precio de cada producto
var price = trs[i].children[3].innerHTML;
total = total + parseInt(price);
}
var t = document.getElementById("total");
// Luego pon el valor de total en el objeto t
t.innerHTML = total;
}
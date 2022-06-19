const pizzas = [
  {
    id: 1,
    nombre: "Muzarella",
    ingredientes: ["Salsa", "Mozarella", "Orégano"],
    precio: 550,
  },
  {
    id: 2,
    nombre: "Palmitos",
    ingredientes: ["Salsa", "Mozarella", "Palmitos", "Salsa Golf"],
    precio: 1000,
  },
  {
    id: 3,
    nombre: "Provolone",
    ingredientes: ["Salsa", "Provolone"],
    precio: 1500,
  },
  {
    id: 4,
    nombre: "Cantimpalo",
    ingredientes: ["Salsa", "Mozarella", "Orégano", "Cantimpalo"],
    precio: 1280,
  },
  {
    id: 5,
    nombre: "Roquefort",
    ingredientes: ["Salsa", "Roquefort", "Queso"],
    precio: 1400,
  },
  {
    id: 6,
    nombre: "Huevo",
    ingredientes: ["Salsa", "Mozarella", "Huevo"],
    precio: 800,
  },
  {
    id: 7,
    nombre: "Tomate",
    ingredientes: ["Salsa", "Mozarella", "Tomate"],
    precio: 600,
  },
];

for (i = 0; i < pizzas.length; i++) {
  if (pizzas[i].id % 2 === 0) {
  } else {
    console.log(
      `${pizzas[i].nombre} es el nombre de una de las pizzas con ID impar (ID ${pizzas[i].id})`
    );
  }
}

for (i = 0; i < pizzas.length; i++) {
  if (pizzas[i].precio < 600) {
    console.log(
      `La pizza de gusto de ${pizzas[i].nombre} cuesta menos $600. Su costo es de $${pizzas[i].precio}`
    );
  }
}

let nombresPizzas = [];
for (let i = 0; i < pizzas.length; i++) {
  nombresPizzas.push(pizzas[i].nombre);
}
console.log(`Los gustos disponibles de pizzas son: ${nombresPizzas}`);

let preciosPizzas = [];
for (let i = 0; i < pizzas.length; i++) {
  preciosPizzas.push(pizzas[i].precio);
}
console.log(`Los precios de las pizzas disponibles son $: ${preciosPizzas}`);

for (let i = 0; i < pizzas.length; i++) {
  console.log(`La pizza ${pizzas[i].nombre} cuesta $${pizzas[i].precio}`);
}
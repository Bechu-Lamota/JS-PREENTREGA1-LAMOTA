//1er ENTREGA

let edad = parseInt(prompt("edad"));

if (edad < 16) {
	alert("no podes entrar");
} else if (edad < 17) {
	alert("pasas, pero no te creo nada");
	function calculadora(num1, num2, operacion) {
		switch (operacion) {
			case "+":
				return num1 + num2;
				break;

			case "-":
				return num1 - num2;
				break;

			case "*":
				return num1 * num2;
				break;

			case "/":
				return num1 / num2;
				break;

			default:
				return "Operacion no encontrada";
				break;
		}
	}

	let num1 = parseInt(prompt("Ingrese el numero"));
	let num2 = parseInt(prompt("Ingrese el numero"));
	let operacion = prompt("Ingrese el operador");

	let resultado = calculadora(num1, num2, operacion);
	alert(`El resultado es ${resultado}`);
} else {
	alert("adelante");
	function calculadora(num1, num2, operacion) {
		switch (operacion) {
			case "+":
				return num1 + num2;
				break;

			case "-":
				return num1 - num2;
				break;

			case "*":
				return num1 * num2;
				break;

			case "/":
				return num1 / num2;
				break;

			default:
				return "Operacion no encontrada";
				break;
		}
	}

	let num1 = parseInt(prompt("Ingrese el numero"));
	let num2 = parseInt(prompt("Ingrese el numero"));
	let operacion = prompt("Ingrese el operador");

	let resultado = calculadora(num1, num2, operacion);
	alert(`El resultado es ${resultado}`);
}




//2da ENTREGA
//Quiero hacer un registro de Usuarios. Utilizando Objets, Arrays,
alert("Registresé, para acceder a los servicios");

class Usuarios {
	constructor(email, clave) {
		this.email = email;
		this.clave = clave;
	}
}
let listaUsuarios = [];

function igUs() {
	let email = prompt("Email");
	let clave = prompt("Clave");

	let nUs = new Usuarios(email, clave);
	listaUsuarios.push(nUs);
}
igUs();

//Por ultimo, propongo un ejercicio
alert(`FrostY, es una empresa dedicada a la elaboración de yogur helado. Se encuentra con un problema en el centro de ENVASADO: Del yogur se pierde el 8% y el 15% de los yogures envasados se rompe y el costo de conversion es de $40/u.`);

const productos = [
	{ codigo: 1, pd: "Yogur", precio: 210.53, q: 0.171, total: 49.81 },
	{ codigo: 2, pd: "Envase", precio: 0.50, q: 0.85, total: 0.59 },
	{ codigo: 3, pd: "CC", precio: 40, q: 1, total: 40.00 },
];

let total = productos.reduce((acum, item) => acum + item.total, 0);
console.log(total)

//Pregunta 1
let pg1 = 90.40
let pregunta = prompt(`Pregunta 1: Cual es el costo total de producir 1 yogur?`);

if (pregunta < 90) {
	alert("Mal. Intente de nuevo");
} else if (pregunta < 90.29) {
	alert("Mal. Intente de nuevo");
} else if (pregunta === 90.40) {
	alert("Bravo");
}
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
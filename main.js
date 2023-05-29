//ENTREGA 3
document.getElementById("miFormulario").addEventListener("submit", function (event) {
	event.preventDefault();
	// Evito que se envíen los datos automáticamente.

	// Obtengo los valores de los campos del formulario
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let email = document.getElementById("email").value;
	let contraseña = document.getElementById("contraseña").value;

	//Los unifico
	let usuario = {
		nombre: nombre,
		apellido: apellido,
		email: email,
		contraseña: contraseña
	};

	// Almacena los valores en sessionStorage
	sessionStorage.setItem("nombre", nombre);
	sessionStorage.setItem("apellido", apellido);
	sessionStorage.setItem("email", email);
	sessionStorage.setItem("contraseña", contraseña);	

	console.log("Datos almacenados en sessionStorage:");
	console.log("Nombre: " + sessionStorage.getItem("nombre"));
	console.log("Apellido: " + sessionStorage.getItem("apellido"));
	console.log("Email: " + sessionStorage.getItem("email"));
	console.log("Contraseña: " + sessionStorage.getItem("contraseña"));
});
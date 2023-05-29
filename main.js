//ENTREGA 3
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("miForm").addEventListener("submit", function (event) {
		event.preventDefault();
		// Evito que se envíen los datos automáticamente.

		// Obtengo los valores de los campos del formulario
		let nombre = document.getElementById("nombre").value;
		let apellido = document.getElementById("apellido").value;
		let email = document.getElementById("email").value;
		let contraseña = document.getElementById("contraseña").value;

		//Los unifico
		let usuarios = {
			nombre: nombre,
			apellido: apellido,
			email: email,
			contraseña: contraseña
		};

		localStorage.setItem("usuarios", JSON.stringify(usuarios));

		console.log(`Datos Almacenados en localStorage:`);
		console.log(usuarios);

		//Reinicio del formulario
		miForm.reset();
	});
});


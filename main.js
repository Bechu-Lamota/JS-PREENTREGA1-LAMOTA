//ENTREGA 3
document.addEventListener("DOMContentLoaded", function() {
	let miForm = document.getElementById("miForm")
	let msjThanks = document.getElementById("msjThanks");
	
	miForm.addEventListener("submit", function (event) {
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

		//Los carga agrupados
		localStorage.setItem("usuarios", JSON.stringify(usuarios));

		//Aca visualizamos los datos cargados
		console.log(`Datos Almacenados en localStorage:`);
		console.log(usuarios);

		//esto va a mostrar el mensaje de agradecimiento y oculta el formulario
		miForm.style.display = "none";
		msjThanks.style.display = "block";
		
		//El formulario se reinicia despues de 5 que se muestra un agradecimiento.
		setTimeout(function () {
			visibleFormulario();
		}, 5000);

		function visibleFormulario() {
			msjThanks.style.display = "none";
			miForm.style.display = "block";
			miForm.reset();
		}
	});
});


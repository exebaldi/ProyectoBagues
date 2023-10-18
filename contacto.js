const form = document.getElementById('form');
const nombre = document.getElementById('Nombre');
const email = document.getElementById('email');
const Apellido = document.getElementById('Apellido');
const celular = document.getElementById('celular');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nombreValue = nombre.value.trim(); // elimina cualquier caracter vacio .trim
	const emailValue = email.value.trim();
	const celularValue = celular.value.trim();
	const ApellidoValue = Apellido.value.trim();
    const NacimimientoValue = Fecha_de_nacimiento.value.trim();

	if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el nombre en blanco');
	} else {
		setSuccessFor(nombre);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(celularValue === '') {
		setErrorFor(celular, 'el numero de celular no debe quedar en blanco.');
	} else {
		setSuccessFor(celular);
	}
	
	if(ApellidoValue === '') {
		setErrorFor(Apellido, 'No dejar el Apellido en blanco');
	} else{
		setSuccessFor(Apellido);
	}
    if(NacimimientoValue === '') {
		setErrorFor(Fecha_de_nacimiento, 'No dejar la fecha de nacimiento en blanco');
	} else{
		setSuccessFor(Fecha_de_nacimiento);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
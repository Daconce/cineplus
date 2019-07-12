Tracker.autorun(function(){
	if(Meteor.userId()){
		Router.go("/");
	}
});

Template.ingresar.rendered = function(){

}

Template.ingresar.events({
	"submit .form-signin": function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);

		if(isNotEmpty(email) &&
			isNotEmpty(password) &&
			isEmail(email) &&
			isValidPassword(password)){

			Meteor.loginWithPassword(email, password, function(err){
				if(err) {
					Bert.alert(err.reason, "danger", "growl-top-right");
					return false;
				} else {
					Router.go("/");
					Bert.alert("Has ingresado correctamente", "success", "growl-top-right");
				}
			});

		}

		return false // 
	}

});


//Validaciones

var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
};

//Validar que no haya campos vacíos
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Debe completar todos los campos", "danger", "growl-top-right");
	return false;
};

//Validar email
isEmail = function(value) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(value)) {
		return true;
	}
	Bert.alert("Por favor, ingrese una dirección de email válida", "danger", "growl-top-right");
	return false;
};

// Verificar contraseña
isValidPassword = function(password){
	if(password.length <6) {
		Bert.alert("La contraseña debe tener al menos 6 caracteres", "danger", "growl-top-right");
		return false;
	}
	return true;
};

// Verificar que las contraseñas coincidan
areValidPasswords = function(password, confirm) {
	if(!isValidPassword(password)) {
		return false;
	}
	if(password !== confirm) {
		Bert.alert("Las contraseñas no coinciden", "danger", "growl-top-right");
		return false;
	}
	return true;
};
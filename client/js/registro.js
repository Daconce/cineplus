Template.registro.rendered = function(){

}

Template.registro.events({
    "submit .form-signup": function(event){
        var username = trimInput(event.target.username.value);
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        var password2 = trimInput(event.target.password2.value);

        if(isNotEmpty(email) &&
            isNotEmpty(username) &&
            isNotEmpty(password) &&
            isEmail(email)&&
            areValidPasswords(password,password2)){

                Accounts.createUser({
                    username: username,
                    email: email,
                    password: password,
                    profile:{

                    }
                }, function(err){
                    if(err){
                        Bert.alert(err.reason, "danger", "growl-top-right");
                    } else {
                        Bert.alert("Cuenta creada! Has ingresado al sistema", "success", "growl-top-right");
                        Router.go("/");
                    }
                });
            }

            return false;
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
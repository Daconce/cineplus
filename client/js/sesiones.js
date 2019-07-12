Template.sesiones.helpers({
    pelicula: function(){
        var pelicula = peliculas.find();
        return pelicula;
    },
    sala: function(){
        var sala = salas.find();
        return sala;
    },
    sesion: function(){
        var sesion = sesiones.find();
        return sesion;
    }
});

Template.sesiones.events({
    'submit .adminSesiones': function(event){
        var pelicula = event.target.pelicula.value;
        var precio = parseInt(event.target.precio.value);
        var sala = parseInt(event.target.sala.value);
        var fechaSesion = event.target.fechaSesion.value;
        var salasss = salas.findOne({_id: sala});
        var salaAsientos = salasss.asientos;
        var salaAsientosDisp = salasss.asientosDisponibles;

        if (isNotEmpty(pelicula)&&
            isNotEmpty(precio)&&
            isNotEmpty(sala)&&
            isNotEmpty(fechaSesion)) {
            
            Meteor.call('addSesion',pelicula,precio,sala,fechaSesion, salaAsientos, salaAsientosDisp);

            event.target.pelicula.value = "";
            event.target.precio.value = "";
            event.target.sala.value = "";
            event.target.fechaSesion.value = "";
            
            Bert.alert("La sesión fue creada", "success", "growl-top-right");

        } else{
            Bert.alert("Oops! Algo salió mal", "danger", "growl-top-right");
        }

        return false;

    }
});


//Validar que no haya campos vacíos
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Debe completar todos los campos", "danger", "growl-top-right");
	return false;
};

Template.sesiones.events({
    "click #borrar-sesion": function(){
        Meteor.call("eliminarSesion", this._id);
        Bert.alert("La sesión ha sido eliminada", "success", "growl-top-right");
    }
});

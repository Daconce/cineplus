Template.admin.rendered = function(){

}

Template.admin.events({
    'submit .adminPeliculas': function(event){
        var pelicula = event.target.pelicula.value;
        var director = event.target.director.value;
        var genero = event.target.genero.value;
        var duracion = event.target.duracion.value;
        var path = event.target.portada.value;
        var portada = path.replace(/C:\\fakepath\\/, '');

        if (isNotEmpty(pelicula) &&
            isNotEmpty(director) &&
            isNotEmpty(genero) &&
            isNotEmpty(duracion) &&
            isNotEmpty(portada)) {

            Meteor.call('addPeliculas', pelicula, director, genero, duracion, portada);

            event.target.pelicula.value="";
            event.target.director.value="";
            event.target.genero.value="";
            event.target.duracion.value="";
            event.target.portada.value="";

            Bert.alert("La película fue añadida", "success", "growl-top-right");

            } else{
                Bert.alert("Oops! Algo salió mal", "danger", "growl-top-right");
            }

            return false;
    }
});

Template.admin.helpers({
    peliculas: function(){
        return peliculas.find();
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
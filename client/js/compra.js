Template.compra.events({
    'change select[name=pelicula]' : function(event){
        var peli = $(event.target).val();
        Session.set('peli',peli);
    },
    'change select[name=fechaSesion]': function(event){
        var fechahs = $(event.target).val();
        Session.set('fechahs', fechahs);
    },
    'change select[name=salaSesion]' : function(event){
        var salaSsn = $(event.target).val();
        Session.set('salaSsn', salaSsn);
    },
    'submit #reservar-entrada' : function(event){
        var peliReserva = event.target.pelicula.value;
        var fechaReserva = event.target.fechaSesion.value;
        var salaReserva = parseInt(event.target.salaSesion.value);
        var idSesion = String(event.target.idSesion.value);
        var asientosReserva = Session.get('asientos');

        if(isNotEmpty(peliReserva)&&
            isNotEmpty(fechaReserva)&&
            isNotEmpty(salaReserva)&&
            isNotEmpty(idSesion)&&
            isNotEmpty(asientosReserva)){

            Meteor.call('reservaAsientos',idSesion, asientosReserva);

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

Template.compra.helpers({
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
    },
    horarios: function(){
        var peli = Session.get('peli');
        var allsesiones = sesiones.find();
        if(peli){
            return sesiones.find({"peliculaSesion":{$regex: ".*" + peli + ".*", $options: 'i'}}).fetch();
        } else {
            return allsesiones;
        }
    },
    salaHorario: function(){
        var peli = Session.get('peli');
        var fechahs = Session.get('fechahs');
        var allsesiones = sesiones.find();
        if(fechahs){
            return sesiones.find({
                $and : [
                    {"peliculaSesion":{$regex: ".*" + peli + ".*", $options: 'i'}},
                    {"fechaSesion":{$regex: ".*" + fechahs + ".*", $options: 'i'}}
                ]
            }).fetch();
        } else {
            return allsesiones;
        }
    }
});

Template.compra.rendered = function(){
    asientos=[];
    $('.butaca').click(function(){
        $(this).toggleClass('seleccionado');
        console.log(event.target.className + $(event.target).val());
        if($(event.target).hasClass('seleccionado')){
        asientos.push($(event.target).val());
        }else {
            //asientos.pop($(event.target).val());
            asientos = asientos.filter(e=> e !==$(event.target).val())
        }
        console.log(asientos);
        Session.set('asientos',asientos);
    })
};



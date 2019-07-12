if (Meteor.isServer) {
    Meteor.methods({
        addPeliculas: function(pelicula, director, genero, duracion, portada){
            if(!Meteor.userId()){
                throw new Meteor.error('no autorizado');
                return false;
            } else {
                var username = Meteor.user().username;
                var year = new Date().getFullYear();
                var month = new Date().getMonth() + 1;
                var day = new Date().getDate();
                var date = (day + "/" + month + "/" + year).toString();

                peliculas.insert({
                    nombre: pelicula,
                    director: director,
                    genero: genero,
                    duracion: duracion,
                    portada: portada,
                    fecha:  date,
                    createdBy: username,
                    createdAt: new Date(),
                    userId: Meteor.userId(),
                });

            }
        },

        eliminarPelicula: function(peliculaId){
            if(!Meteor.userId()){
                throw new Meteor.Error('no autorizado');
                this.stop();
                return false;
            } else{
                peliculas.remove(peliculaId)
            }
        },

        addSesion: function(pelicula, precio, sala, fechaSesion, salaAsientos, salaAsientosDisp){
            if(!Meteor.userId()){
                throw new Meteor.error('no autorizado');
                return false;
            } else {
                year = fechaSesion.substring(0,4);
                month = fechaSesion.substring(5,7);
                day = fechaSesion.substring(8,10);
                hour = fechaSesion.substring(11,13);
                minute = fechaSesion.substring(14,16);
                date = (day + "/" + month + "/" + year + " " + hour + ":" + minute);

                sesiones.insert({
                    peliculaSesion: pelicula,
                    precio: precio,
                    salaSesion: sala,
                    fechaSesion: date,
                    //verificar ya que no copia asientos y disp de tabla salas
                    asientosDisponibles: salaAsientosDisp,
                    asientos : salaAsientos,
                    reservaciones : []
                });

            }
        },

        eliminarSesion: function(sesionId){
            if(!Meteor.userId()){
                throw new Meteor.Error('no autorizado');
                this.stop();
                return false;
            } else{
                sesiones.remove(sesionId)
            }
        },

        reservaAsientos: function(idSesion, asientosReserva){
            if(!Meteor.userId()){
                throw new Meteor.Error('no autorizado');
                this.stop();
                return false;
            } else{
                var seatsQuery = [];
                var setSeatSelection = {};
                var seats = [[1, 5],[1, 6]];
                var sesion = sesiones.find({_id: "3LXCRhjWosjmdAXqo"});

                for(var i=0;i<seats.lenght;i++){
                    var seatSelector = {};
                    var seatSelection = 'asientos.' + seats[i][0] + '.' + seats[i][1];

                    seatSelector[seatSelection]=0;
                    seatsQuery.push(seatSelector);

                    setSeatSelection[seatSelection]=1;
                }

                var result = sesiones.update({
                    _id: "3LXCRhjWosjmdAXqo",
                    $and: seatsQuery
                }, {
                    $set: {'asientos.1.5':1, 'asientos.1.6':1},//setSeatSelection,
                    $inc: {asientosDisponibles: -seats.lenght},
                    $push:{
                        reservaciones: {
                            _id: "3LXCRhjWosjmdAXqo",
                            asientos: [[1, 5],[1, 6]],//seats,
                            precio: 140,//sesion.precio,
                            total: 140*seats.lenght//sesion.precio * seats.lenght
                        }
                    }
                });

                if(result.nModified == 0){
                    Bert.alert("Oops! Algo salió mal", "danger", "growl-top-right");
                }
                if(result.nModified == 1){
                    Bert.alert("Reserva realizada correctamente.", "success", "growl-top-right");
                }

            }
        }
    });
}
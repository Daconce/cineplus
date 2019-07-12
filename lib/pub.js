if (Meteor.isServer){
    Meteor.publish('peliculas', function(){
        /*if(!this.userId){
            return false;
            throw new Meteor.Error('no autorizado');
        } else{*/
            return peliculas.find();
        /*}*/
    });

    Meteor.publish("salas", function(){
        return salas.find();
    });

    Meteor.publish("sesiones", function(){
        return sesiones.find();
    });

    Meteor.publish("carrito", function(){
        return carrito.find();
    });

}
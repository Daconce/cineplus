Template.cartelera.helpers({
    pelicula: function(){
        var pelicula = peliculas.find();
        return pelicula;
    },
});

Template.cartelera.events({
    "click #borrar-pelicula": function(){
        Meteor.call("eliminarPelicula", this._id);
        Bert.alert("La película ha sido eliminada", "success", "growl-top-right");
    }
});
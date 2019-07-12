if (Meteor.isClient) {
    Meteor.subscribe('peliculas');
    Meteor.subscribe('salas');
    Meteor.subscribe('sesiones');
    Meteor.subscribe('carrito');
    Meteor.subscribe('numeracion');
}
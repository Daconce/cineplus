Template.salas.helpers({
    salas: function(){
        return salas.find().fetch();
    }
});

/*Template.salas.rendered = function(){
    $('canvas').click(function(){
        $(this).css({
            'background-color': 'blue'
        })
    });
};*/
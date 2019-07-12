Router.configure({
    layoutTemplate: 'main_layout'
});

Router.map(function(){
    //Página principal
    this.route('home',{
        path:'/',
        template: 'home'
    })
});

Router.map(function(){
    //Películas
    this.route('cartelera',{
        path:'/cartelera',
        template: 'cartelera'
    })
});

Router.map(function(){
    //Registro
    this.route('registro',{
        path:'/registro',
        template: 'registro'
    })
});

Router.map(function(){
    //Logueo
    this.route('ingresar',{
        path:'/ingresar',
        template: 'ingresar'
    })
});

Router.map(function(){
    //Complejos
    this.route('complejos',{
        path:'/complejos',
        template: 'complejos'
    })
});


Router.map(function(){
    //Mi cuenta
    this.route('mi_cuenta',{
        path:'/mi_cuenta',
        template: 'mi_cuenta'
    })
});


Router.map(function(){
    //Asientos
    this.route('asientos',{
        path:'/cartelera/asientos',
        template: 'asientos'
    })
});

Router.map(function(){
    //Admin
    this.route('admin',{
        path:'/admin',
        template: 'admin'
    })
});

Router.map(function(){
    //Salas
    this.route('salas',{
        path:'/salas',
        template: 'salas'
    })
});

Router.map(function(){
    //Sesiones
    this.route('sesiones',{
        path:'/sesiones',
        template: 'sesiones'
    })
});

Router.map(function(){
    //Compra
    this.route('compra',{
        path:'/compra',
        template: 'compra'
    })
});

Template.mi_cuenta.helpers({
    email: function(){
        if(!Meteor.user()){
            Bert.alert("No ha ingresado al sistema.", "danger", "growl-top-right");
            return false;
        }else{
            return Meteor.user().emails[0].address;
        }
    },

    username: function(){
        if(!Meteor.user()){
            Bert.alert("No ha ingresado al sistema.", "danger", "growl-top-right");
            return false;
        }else{
            return Meteor.user().username;
        }
    }
});
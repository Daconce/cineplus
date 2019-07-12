Template.navbar.rendered = function(){

}

Template.navbar.events({
	"click .logout": function(event){
		Meteor.logout(function(err){
			if(err) {
				Bert.alert(err.reason, "danger", "growl-top-right");
			} else {
				Router.go('/');
				Bert.alert("Has salido del sistema", "success", "growl-top-right");
			}
		});
	},
});
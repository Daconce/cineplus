Template.home.rendered = function(){
  // Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
};

Template.home.created = function() {
    if (Accounts._verifyEmailToken) {
      Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
        if (err != null) {
          if (err.message = 'Enlace de verificación de email expirado [403]') {
            Bert.alert("El link de verificación de email ha expirado.", "danger", "growl-top-right")
          }
        } else {
          Bert.alert("Muchas gracias! Su dirección de email ha sido confirmada.", "success", "growl-top-right")
        }
      });
    }
};

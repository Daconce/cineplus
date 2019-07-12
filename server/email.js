Meteor.startup(function () {
    process.env.MAIL_URL = "smtp://postmaster%40sandbox9f6e1bda1be44899a76aa9af97116f35.mailgun.org:cd99d795d3653f876437cec9798cde92-4836d8f5-cfe751f5@smtp.mailgun.org:587";
});


if (Meteor.isDevelopment){
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
 }
Accounts.config({
    sendVerificationEmail: true
});

Accounts.emailTemplates.from = 'Soporte de Cine+ <no-reply@cineplus.com>';
Accounts.emailTemplates.siteName = 'Cine+';
Accounts.emailTemplates.verifyEmail = {
    subject() {
       return "Activá tu cuenta ahora!";
    },
    text(username, url) {
       return `!Estamos felices de que confíes en CINE+. Para activar tu cuenta debes ingresar al siguiente link: ${url}`;
    }    
 };


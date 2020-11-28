const MailController = require('./controllers/mail.controller');

exports.routesConfig = function (app) {
    app.get('/mails', [
        MailController.listMail
    ]);
    app.post('/mail/send', [
        MailController.sendMail
    ]);
};
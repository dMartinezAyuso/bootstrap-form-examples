'use strict';

var responseMock = require('../mocks/login.json');

var moduleLogin = {
    path: '/login/login',
    cache:false,
    status: function(req, res) {
        if(req.body.usuario === 'error') {
            res.send(401, 'loginError');
        }
        if(req.body.usuario === 'bloqueoClaveDigital') {
            res.send(401, 'bloqueoClaveDigital');
        }
        if(req.body.usuario === 'bloqueoClaveFrances') {
            res.send(401, 'bloqueoClaveFrances');
        }
        if(req.body.usuario === 'bloqueoClavePreguntas') {
            res.send(401, 'bloqueoClavePreguntas');
        }
        if(req.body.usuario === 'claveCaducada') {
            res.send(401, 'claveCaducada');
        }
        if(req.body.usuario === 'noEsCliente') {
            res.send(401, 'noEsCliente');
        }
    },
    container: {
        response : responseMock
    }
};

module.exports = [moduleLogin];

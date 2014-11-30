'use strict';

var responseMock = require('../mocks/generationUserKey.json');

var moduleLogin = {
    path: '/cliente/usuarioyclave',
    cache:false,
    status: function(req, res) {
        if(req.body.usuario === 'yaEsCliente') {
            res.send(401, 'YaEsCliente');
        }

    },
    container: {
        response : responseMock
    }
};

module.exports = [moduleLogin];

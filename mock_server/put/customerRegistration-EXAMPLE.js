var responseMock = require('../mocks/customerRegistration.json');

var moduleCustomerRegistration = {
    path: '/cliente/cliente',
    cache:false,
    container: {
        response : responseMock
    }
};

module.exports = [moduleCustomerRegistration];

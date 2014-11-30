var responseCuentas = require('../mocks/chartCuentas.json');
var responseTarjetasDolares = require('../mocks/chartTarjetasDolares.json');
var responseTarjetasPesos = require('../mocks/chartTarjetasPesos.json');
var responseInversiones = require('../mocks/chartInversiones.json');
var responseChartDetail = require('../mocks/chartDetail.json');

var moduleChartCuentas = {
    path: '/tests/chartCuentas',
    cache:false,
    container: {
        response : responseCuentas
    }
};

var moduleChartTarjetasDolares = {
    path: '/tests/chartTarjetasDolares',
    cache:false,
    container: {
        response : responseTarjetasDolares
    }
};

var moduleChartTarjetasPesos = {
    path: '/tests/chartTarjetasPesos',
    cache:false,
    container: {
        response : responseTarjetasPesos
    }
};

var moduleChartInversiones = {
    path: '/tests/chartInversiones',
    cache:false,
    container: {
        response : responseInversiones
    }
};

var moduleChartDetail = {
    path: '/private/accounts/detail',
    cache:false,
    container: {
        response : responseChartDetail
    }
};

module.exports = [moduleChartCuentas,moduleChartTarjetasDolares,moduleChartTarjetasPesos,moduleChartInversiones,moduleChartDetail];

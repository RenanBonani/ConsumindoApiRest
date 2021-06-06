const axios = require("axios");

const api = axios.create({
    baseUrl:'https://brasilapi.com.br/api/cep/v1/'
});

module.exports.api;
'use strict';

const fetch = require('node-fetch');

const getAEDdata = () => fetch(process.env.AED_API).then(res => res.json());

module.exports = {
  getAEDdata,
};

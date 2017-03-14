'use strict';

/* eslint-env mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');
const proxyquire = require('proxyquire');

const expect = chai.expect;

const aedDataClient = {
  getAEDdata() {
    return Promise.resolve({ data: [] });
  },
};

const server = proxyquire('../server', {
  './apiSupport/aedData': aedDataClient,
});

chai.use(chaiHttp);

describe('server: usage', () => {
  it('should respond ok', (done) => {
    chai.request(server).get('/').end((err, res) => {
      expect(res.status).to.eql(200);
      done();
    });
  });
});

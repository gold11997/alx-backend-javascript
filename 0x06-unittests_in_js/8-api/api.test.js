const expect = require('chai').expect;
const request = require('request');


describe('integration Testing', () => {
  describe('first page', () => {
    it('returns the status code 200', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    }));
  });
});

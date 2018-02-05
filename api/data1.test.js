const promise = require('./data1.js');

describe('test fpor api one to check data is being returned or not', () => {
  it('checking if data is not null', () => {
    promise.then((data) => {
      expect(data).not.toBe(null);
    });
  });
});


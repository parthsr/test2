const promiseDataFormat = require('./dataformat');

describe('testing whether the data is proper or not', () => {
  it('checking if the data is not null', () => {
    promiseDataFormat.then((data) => {
      expect(data).not.toBe(null);
    });
  });
});


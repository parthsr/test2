const https = require('https');

const api1 = ' https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';

let data = '';
const promise = new Promise((resolve) => {
  https.get(api1, (res) => {
    res.on('data', (chunk) => {
      data += chunk.toString();
    });
    res.on('end', () => {
      resolve(data);
    });
  });
});

module.exports = promise;

const https = require('https');

const api2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/1';
let data2 = '';
const promise2 = new Promise((resolve) => {
  https.get(api2, (res) => {
    res.on('data', (chunk) => {
      data2 += chunk.toString();
    });
    res.on('end', () => {
      console.log(data2);
      resolve(data2);
    });
  });
});

module.exports = promise2;

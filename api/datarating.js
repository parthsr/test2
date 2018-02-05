const https = require('https');
const promise1 = require('./data1');
const func = require('./func');

let lengtdh;
let PromiseRating;
promise1.then((data) => {
  let d = JSON.parse(data);
  lengtdh = d.books.length;
  console.log(lengtdh);
  let promise2;
  let data2 = '';
  PromiseRating = new Promise((resolve) => {
    let url = [];
    for (let i = 0; i < lengtdh; i += 1) {
      url.push(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${i + 1}`);
    }
    const arrpromise = new Promise((resolve) => {
      let responses = [];
      let innerPromise;
      for (let i = 0; i < lengtdh; i += 1) {
        innerPromise = new Promise((resolve) => {
          https.get(url[i], (res) => {
            res.on('data', (chunk) => {
              // console.log(chunk.toString());
              resolve(chunk.toString());
            });
          });
        });
        innerPromise.then((result) => {
          // console.log(result);
          data = func(data, result, i);
          responses.push(result);
        });
        // console.log(responses);
      }
      resolve(responses);
    });
    arrpromise.then((data) => {
      // console.log(data);
    });
  });
  console.log(data);
});


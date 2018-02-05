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
    let innerPromise = [];
    for (let i = 0; i < lengtdh; i += 1) {
      innerPromise[i] = new Promise((resolve) => {
        https.get(url[i], (res) => {
          res.on('data', (chunk) => {
            // console.log(chunk.toString());
            resolve(chunk.toString());
          });
        });
      });
    }
    console.log(data);
    datajson = JSON.parse(data);
    Promise.all(innerPromise).then((result) => {
      console.log(result);
      for (let i = 0; i < lengtdh; i += 1) {
        results = JSON.parse(result[i]);
        datajson.books[i].rating = results.rating;
      }
      // console.log(datajson);
      resolve(datajson);
    });
  }).then((data) => {
    console.log(data);
    func(data);
  });
});

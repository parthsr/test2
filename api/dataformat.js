const promise1 = require('./data1.js');

const promise2 = new Promise((resolve) => {
  let data1 = '';
  promise1.then((data) => {
    data1 = data;
    resolve(data1);
  });
});

const promiseFinalData = new Promise((resolve) => {
  let newData = {};
  promise2.then((data) => {
    const jsondata = JSON.parse(data);
    for (let i = 0; i < jsondata.books.length; i += 1) {
      newData[jsondata.books[i].Author] = [];
    }
    for (let i = 0; i < jsondata.books.length; i += 1) {
      newData[jsondata.books[i].Author].push(jsondata.books[i]);
    }
    console.log(newData);
    resolve(newData);
  });
  // console.log(newData);
});

// promise2.then((data) => {
//   const jsondata = JSON.parse(data);
//   console.log(jsondata.books.length);
//   for (let i = 1; i <= jsondata.books.length; i++) {
//     const api2 = `https:// 5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${i}`;
//   }
// });
promiseFinalData.then((data4) => {
  console.log(data4);
});


module.exports = promiseFinalData;

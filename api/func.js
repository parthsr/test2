const promise1 = require('./data1.js');

const funct = (data1, dataR, iterator) => {
  let newdata = '';
  newdata = JSON.parse(data1);
  dataR = JSON.parse(dataR);
  // console.log(newdata.books[iterator]);
  console.log(dataR.rating);
  newdata.books[iterator].rating = dataR.rating;
  // console.log(newdata.books[iterator]);
  console.log(newdata);
  return newdata;
};

module.exports = funct;

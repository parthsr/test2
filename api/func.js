function a(data) {
  console.log(data);
  const jsondata = JSON.parse(data);
  for (let i = 0; i < jsondata.books.length; i += 1) {
    newData[jsondata.books[i].Author] = [];
  }
  for (let i = 0; i < jsondata.books.length; i += 1) {
    newData[jsondata.books[i].Author].push(jsondata.books[i]);
  }
  // console.log(newData);
}
module.exports = a;

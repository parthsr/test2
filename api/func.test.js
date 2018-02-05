const func = require('./func');

// describe('checking if the fucntion references the right book', () => {
//   it('checking if the first book that is being passed is the same book we want to reference', () => {
//     global.console.log = jest.fn();
//     func('he', 1);
//     expect(console.log).toHaveBeenCalledWith(`{ Author: 'J K Rowling',
//     id: 2,
//     Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)' }`);
//   });
// });

func('he', 1);

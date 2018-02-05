const Hapi = require('hapi');
const path = require('path');
const handle = require('')

const server = new Hapi.Server();

server.register(Inert, (err) => {
  if (err) { throw err; }
});

server.connection({
  host: 'localhost',
  // port: Number(process.argv[2] || 8080),
  port: 8080,
});

// const logger = (request, reply) => {
//   reply(request.params.fileName);
// };

server.route({
  path: '/',
  method: 'GET',
  handler: handle
  },
});

server.start(() => {
  console.log('Server created at:', server.info.uri);
});

module.exports = server;

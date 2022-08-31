const getRequestHandler = require('./handlers/getRequestHandler');
const postRequestHandler = require('./handlers/postRequestHandler');
const putRequestHandler = require('./handlers/putRequestHandler');
const deleteRequestHandler = require('./handlers/deleteRequestHandler');

module.exports = {
  getRequestHandler,
  putRequestHandler,
  deleteRequestHandler,
  postRequestHandler,
};
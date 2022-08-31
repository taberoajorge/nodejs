const courses = require('../../../courses');

function putRequestHandler(req, res) {
  const path = req.url;

  if (path === '/courses/programing') {
    res.statusCode = 200;
    return res.end('all done');
  }
};


module.exports = putRequestHandler;

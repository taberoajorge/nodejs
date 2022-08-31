const courses = require('../../../courses');

function getRequestHandler(req, res) {
  const path = req.url;


  if (path === '/') {
    res.statusCode = 200;
    return res.end('Welcome to my fist server')
  } else if (path === '/courses') {
    res.statusCode = 200;
    return res.end(JSON.stringify(courses));
  } else if (path === '/courses/programing') {
    res.statusCode = 200;
    return res.end(JSON.stringify(courses.courses.programing));
  }

  res.statusCode = 404;
  return res.end('Not found');
};

module.exports = getRequestHandler;
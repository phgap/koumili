'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const cors = require('cors');
const jwt = require('./api/helpers/jwt');
//配置CORS的响应头
// app.use((req, res, next) => {
//   //CORS请求分简单请求和复杂请求，简单请求时，如果请求方法为GET/POST以外的方法，
//   //会先发送预请求，浏览器会对预请求的响应做检验，检验通过才会发送真正的请求。
//   //CORS的复杂请求中，响应头中必须包含(Access-Control-Allow-Origin、Access-Control-Allow-Methods)
//   //这两个响应头
//   res.set('Access-Control-Allow-Origin', '*')
//   res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
//   next()
// })

app
  .use(cors())
  .use(jwt())
  .use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('{"authorized": false}');
    }
  });

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }
  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});

const Koa = require('koa');
const angularProxy = require('koa-angular-proxy');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const bearerToken = require('koa-bearer-token');
const router = require('./server/routes');
const errorHandler = require('./server/error/errorHandler.middleware').errorHandlerMiddleware;


const app = new Koa();

app.use(logger());
app.use(bodyParser());
app.use(bearerToken({
  bodyKey: 'access_token',
  queryKey: 'access_token',
  headerKey: 'Bearer',
  reqKey: 'token'
}));
app.use(errorHandler);
app.use(router);
app.use(angularProxy('./dist'));

app.listen(3000, () => {
  console.log('Running on port: ', 3000);
});

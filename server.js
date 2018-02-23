const koa = require('koa');
const app = new koa();
const angularProxy = require('koa-angular-proxy');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

app.use(logger());
app.use(bodyParser());
app.use(angularProxy('./dist'));

app.listen(3000, () => {
  console.log('Running on port: ', 3000);
});

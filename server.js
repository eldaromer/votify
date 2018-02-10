const koa = require('koa');
const app = new koa();
const angularProxy = require('koa-angular-proxy');
const logger = require('koa-logger');

app.use(logger());
app.use(angularProxy('./dist'));

app.listen(3000, () => {
  console.log('Running on port: ', 3000);
});

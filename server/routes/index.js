const combineRouters = require('koa-combine-routers');
const userRouter = require('./user.routes');
const pollRouter = require('./poll.routes');

const router = combineRouters([
  userRouter,
  pollRouter
]);

module.exports = router;

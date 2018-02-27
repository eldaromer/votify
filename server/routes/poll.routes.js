const Router = require('koa-router');
const router = new Router({prefix: '/api/poll'});
const error = require('../error/Exception').Exception;
const auth = require('../auth/auth');
const Poll = require('../db/models/index').Poll;

router.post('/create', async(ctx, next) => {
  const body = ctx.request.body;

  if (!body.title) throw new error(422, 'Missing poll title');
  if (!body.options) throw new error(422, 'Missing options array');
  if (!Array.isArray(body.options)) throw new error (422, 'body.options needs to be of type Array');
  if (body.options.length < 1) throw new error(422, 'No options provided in array');
  if (!ctx.request.token) throw new error(403, 'No jwt token provided');

  const decoded = await auth.verifyToken(ctx.request.token);

  const poll = await Poll.create({
    title: body.title,
    options: body.options,
    userId: decoded.id
  });

  ctx.status = 201;
  ctx.body = {
    poll: poll
  }

});

router.get('/polls', async (ctx, next) => {

  const polls = await Poll.findAll();

  ctx.status = 200;
  ctx.body = {
    polls: polls
  }

});

router.get('/latest/:num', async (ctx, next) => {
  const num = ctx.params.num;

  const polls = await Poll.findAll({limit: num, order: [['id', 'DESC']]});

  ctx.status = 200;
  ctx.body = {
    polls: polls
  }

});

module.exports = router;

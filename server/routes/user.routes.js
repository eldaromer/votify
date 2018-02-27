const Router = require('koa-router');
const router = new Router({ prefix: '/api/user'});
const error = require('../error/Exception').Exception;
const User = require('../db/models/index').User;
const bcrypt = require('bcrypt');
const auth = require('../auth/auth');

router.post('/create', async(ctx, next) => {
  const body = ctx.request.body;

  if (!body.username) throw new error(422, 'Missing username');
  if (!body.password) throw new error(422, 'Missing password');

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const user = await User.create({
    username: body.username,
    password: hashedPassword
  });

  ctx.status = 201;
  ctx.body= {
    user: user
  };

});

router.post('/login', async(ctx, next) => {
  const body = ctx.request.body;

  if (!body.username) throw new error(422, 'Missing username');
  if (!body.password) throw new error(422, 'Missing password');

  const user = await User.findOne({ where: {username: body.username} });

  if (user === null) throw new error(404, 'User does not exist');

  const valid = await bcrypt.compare(body.password, user.password);

  if (!valid) throw new error(401, 'Invalid password');

  const token = await auth.generateToken(user.dataValues);
  console.log(token);

  ctx.status = 200;
  ctx.body = {
    user: user,
    token: token
  }
});

module.exports = router;

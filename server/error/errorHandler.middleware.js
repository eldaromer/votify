const Exception = require('./Exception').Exception;

module.exports.errorHandlerMiddleware = async function errorHandlerMiddleware (ctx, next) {
  try {
    await next();
  } catch(err) {
    if (err instanceof Exception) {
      ctx.body = err.toObject();
      ctx.status = err.statusCode;
    } else {

      let message = '';

      if (err.errors) err.message = err.errors[0];

      ctx.body = {
        statusCode: 500,
        message: err.message || 'Unexpected error.'
      };
      ctx.status = 500;
    }
  }
};

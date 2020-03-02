module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('connect', 'connected!');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
};
};
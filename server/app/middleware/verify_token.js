'use strict';

const jwt = require('jsonwebtoken');

module.exports = () => {
  return function* (next) {
    const cert = this.app.config.cert;
    const authorization = this.get('Authorization');
    if (authorization === '') {
      this.throw(401, 'no token');
    }
    const token = authorization.split(' ')[1];
    let tokenContent;
    try {
      tokenContent = jwt.verify(token, cert);
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        this.throw(401, 'token expired');
      }
      this.throw(401, 'invalid token');
    }
    this.token = tokenContent;
    yield next;
  };
};

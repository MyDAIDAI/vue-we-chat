'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should registered POST /api/register', () => {
    return app.httpRequest()
      .post('/api/register')
      .set('Content-Type', 'application/json')
      .send({
        nickname: '123',
        userEmail: '11111',
        password: '123',
      })
      .expect(200)
      .expect({
        code: '200',
        success: true,
        data: {
          msg: '该用户已注册，请登录',
        },
      });
  });

  it('should register POST /api/register', () => {
    return app.httpRequest()
      .post('/api/register')
      .set('Content-Type', 'application/json')
      .send({
        nickname: '123',
        userEmail: '1111111',
        password: '123',
      })
      .expect(200)
      .expect({
        code: '200',
        success: true,
        data: {
          nickname: '123',
          userEmail: '1111111',
          id: '5b76c82ec47f3439ed5677a5',
          msg: '注册成功'
        },
      });
  });

  it('should null POST /api/register', () => {
    return app.httpRequest()
      .post('/api/register')
      .set('Content-Type', 'application/json')
      .send({
        nickname: '123',
        userEmail: '',
        password: '123',
      })
      .expect(200)
      .expect({
        code: '200',
        success: true,
        data: {
          msg: '用户邮箱和密码不能为空',
        },
      });
  });
});

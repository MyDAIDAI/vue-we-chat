'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    nickname: { type: String },
    // 用户邮箱唯一
    userEmail: { type: String },
    password: { type: String },
    socketId: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3986557066,2648426149&fm=26&gp=0.jpg'
    },
    friends: {
      type: Array
    },
    loginStatus: {
      type: Boolean,
      default: false
    },
    createTime: {
      type: Date,
      default: Date.now(),
    },
    updateTime: {
      type: Date,
      default: Date.now(),
    },
  });

  return mongoose.model('User', UserSchema);
};

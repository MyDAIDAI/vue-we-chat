'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    nickname: { type: String },
    userEmail: { type: String },
    password: { type: String },
    avatar: {
      type: String,
      default: 'http://bpic.588ku.com/element_origin_min_pic/17/06/23/f21e1f3b279c62d6f3469ca6c84e638f.jpg'
    },
    friends: {
      type: Array
    },
    loginStatus: {
      type: Boolean,
      default: false
    },
    requestFriends: {
      type: Array
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

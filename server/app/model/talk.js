'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TalkSchema = new Schema({
    sendId: {
      type: String,
    },
    receiveId: {
      type: String,
    },
    message: {
      type: String,
      default: '',
    },
    receiveStatus: {
      type: Number,
      default: 0,
    },
    readStatus: {
      type: Number,
      default: 0,
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

  return mongoose.model('Talk', TalkSchema);
};

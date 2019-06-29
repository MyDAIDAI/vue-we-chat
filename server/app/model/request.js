

'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const RequestSchema = new Schema({
    addUser: { type: String },
    requestUser: { type: String },
    requestTime: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: Number,
      default: 0
    },
    message: {
      type: String
    },
    know: {
      type: Boolean,
      default: false
    }
  });

  return mongoose.model('Request', RequestSchema);
};

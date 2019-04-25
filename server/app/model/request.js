

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
      type: Boolean,
      default: false
    },
    message: {
      type: String
    }
  });

  return mongoose.model('Request', RequestSchema);
};

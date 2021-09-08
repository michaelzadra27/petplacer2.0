const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  userId: {
    type: String,
    unnique: true,
    required: 'like must contain a user id of type string'
  },
  group: {
    type: String,
    required: 'must have group name of type string'
  },
  dog_ID: {
    type: Number,
  }
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
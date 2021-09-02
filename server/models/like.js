const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  user_ID: {
    type: Number,
  },
  dog_ID: {
    type: Number,
  }
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  email: {
    type: String,
    required: 'like must contain a email of type string',
  },
  groupName: {
    type: String,
    required: 'must have group name of type string'
  },
  dog_ID: {
    type: Number,
  },
  dogName: {
    type: String,
  },
  contactCity: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  dogURL: {
    type: String,
  },
  dogPhotoApi: {
    type: String,
  },
  description: {
    type: String
  }

});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
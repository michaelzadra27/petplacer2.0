const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupName: {
    type: String,
    unique: true,
    trim: true,
    required: 'a group name of type string is required'
  },
  profiles: {
    type: Array
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupName: {
    type: String,
    trim: true,
    required: 'Group must have a name of type string'
  },
  users: {
    type: Array
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
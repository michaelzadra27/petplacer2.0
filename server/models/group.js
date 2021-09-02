const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  users: {
    type: Array
}
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
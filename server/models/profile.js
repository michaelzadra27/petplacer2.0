const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Name of type string required for user"
  },
  password: {
    type: String,
    required: "Password of type string required for user"
  }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
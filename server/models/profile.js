const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

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

profileSchema.pre('save', async function(next) {
  if(this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
});

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password)
}

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
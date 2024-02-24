const mongoose = require("mongoose");
const passportLocaLMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  admin: {
    type: Boolean,
    default: false,
  },
  facebookId: String,
});

userSchema.plugin(passportLocaLMongoose);

module.exports = mongoose.model("User", userSchema);

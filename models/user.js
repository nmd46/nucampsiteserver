const mongoose = require("mongoose");
const passportLocaLMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passportLocaLMongoose);

module.exports = mongoose.model("User", userSchema);

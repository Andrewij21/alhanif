const mongoose = require("mongoose");
const moment = require("moment");

const mongoSchema = mongoose.Schema({
  role: {
    type: Number,
    default: 4,
  },
  username: String,
  password: String,
});

module.exports = mongoose.model("users", mongoSchema);

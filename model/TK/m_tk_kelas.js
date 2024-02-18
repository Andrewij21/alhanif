const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  id_kelas: {
    type: String,
    default: null,
  },
  NamaKelas: {
    type: String,
    default: null,
  },
  Keterangan: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("kelas_tk", CustomerSchema);

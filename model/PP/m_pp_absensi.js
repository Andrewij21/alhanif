const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  id_absensi: {
    type: String,
    default: null,
  },
  nama: {
    type: String,
    default: null,
  },
  kelas: {
    type: String,
    default: null,
  },
  tanggal: {
    type: String,
    default: null,
  },
  Status: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("absensi_santri_pp", CustomerSchema);

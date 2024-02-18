const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  id_pemasukan: {
    type: String,
    default: null,
  },
  Tanggal: {
    type: String,
    default: null,
  },
  jenisPemasukan: {
    type: String,
    default: null,
  },
  total: {
    type: Number,
    default: null,
  },
  keterangan: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("pemasukan", CustomerSchema);

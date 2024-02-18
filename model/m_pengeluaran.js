const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  id_pengeluaran: {
    type: String,
    default: null,
  },
  Tanggal: {
    type: String,
    default: null,
  },
  NamaPengeluaran: {
    type: String,
    default: null,
  },
  JumlahPengeluaran: {
    type: String,
    default: null,
  },
  HargaPengeluaran: {
    type: Number,
    default: null,
  },
  Total: {
    type: Number,
    default: null,
  },
  keterangan: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("pengeluaran", CustomerSchema);

const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  NoKwitansi: {
    type: String,
    default: null,
  },
  NamaSiswa: {
    type: String,
    default: null,
  },
  Kelas: {
    type: String,
    default: null,
  },
  TanggalPembayaran: {
    type: String,
    default: null,
  },
  JenisPembayaran: {
    type: String,
    default: null,
  },
  Total: {
    type: Number,
    default: null,
  },
  NamaPenerima: {
    type: String,
    default: null,
  },
  Keterangan: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("pembayaran_tk", CustomerSchema);

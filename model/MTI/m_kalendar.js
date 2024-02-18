const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  id_kalendar: {
    type: String,
    default: null,
  },
  NamaKegiatan: {
    type: String,
    default: null,
  },
  TanggalKegiatan: {
    type: String,
    default: null,
  },
  Deskripsi: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("kalendar_mti", CustomerSchema);

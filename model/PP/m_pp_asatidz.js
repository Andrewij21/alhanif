const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  NoAsatidz: {
    type: String,
    default: null,
  },
  NamaAsatidz: {
    type: String,
    default: null,
  },
  Jabatan: {
    type: String,
    default: null,
  },
  TTL: {
    type: String,
    default: null,
  },
  foto: {
    type: String,
    default: null,
  },
  JenisKelamin: {
    type: String,
    default: null,
  },
  Alamat: {
    type: String,
    default: null,
  },
  Email: {
    type: String,
    default: null,
  },
  NoHandphone: {
    type: String,
    default: null,
  },
  Status: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("asatidz_pp", CustomerSchema);

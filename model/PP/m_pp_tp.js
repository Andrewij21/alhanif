const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  NoTenagaPendidik: {
    type: String,
    default: null,
  },
  NamaTenagaPendidik: {
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

module.exports = mongoose.model("tenagapendidik_pp", CustomerSchema);

const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  NoSiswa: {
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
  NamaAyah: {
    type: String,
    default: null,
  },
  PekerjaanAyah: {
    type: String,
    default: null,
  },
  NamaIbu: {
    type: String,
    default: null,
  },
  PekerjaanIbu: {
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

module.exports = mongoose.model("siswa_tk", CustomerSchema);

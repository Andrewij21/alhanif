const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  id_jamaah: {
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
  nik: {
    type: String,
    default: null,
  },
  ttl: {
    type: String,
    default: null,
  },
  jenis_kelamin: {
    type: String,
    default: null,
  },
  pekerjaan: {
    type: String,
    default: null,
  },
  status_perkawinan: {
    type: String,
    default: null,
  },
  alamat: {
    type: String,
    default: null,
  },
  kelurahan_desa: {
    type: String,
    default: null,
  },
  kecamatan: {
    type: String,
    default: null,
  },
  kota_kabupaten: {
    type: String,
    default: null,
  },
  provinsi: {
    type: String,
    default: null,
  },
  kode_pos: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  no_telp: {
    type: String,
    default: null,
  },
  pendidikan_terakhir: {
    type: String,
    default: null,
  },
  golongan_darah: {
    type: String,
    default: null,
  },
  foto: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("jamaah_mti", CustomerSchema);

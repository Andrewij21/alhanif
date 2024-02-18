const mongoose = require('mongoose')
const moment = require('moment')
const ObjectId = mongoose.Types.ObjectId

const mongoSchema = mongoose.Schema({

  objectIdPembelian: {
    type: ObjectId,
    default: null
  },
  idPembelian: {
    type: String,
    default: null
  },
  namaBarang: {
    type: String,
    default: null
  },
  hargaSatuan: {
    type: Number,
    default: 0
  },
  jumlahPembelian: {
    type: Number,
    default: null
  },
  pajak: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: null
  },
  stok: {
    type: Number,
    default: null
  },
  deskripsi: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: new Date().toISOString()
  }
})

module.exports = mongoose.model('detail_pembelian', mongoSchema)

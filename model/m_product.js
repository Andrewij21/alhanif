const mongoose = require('mongoose')
const moment = require('moment');

const mongoSchema = mongoose.Schema({
  product_id: {
    type: String,
    default: null
  },
  nama_product: {
    type: String,
    default: null
  },
  kategori: {
    type: String,
    default: null
  },
  jenis: {
    type: String,
    default: null
  },
  hpp: {
    type: Number,
    default: 0
  },
  harga_jual: {
    type: Number,
    default: 0
  },
  keuntungan_per_product: {
    type: Number,
    default: 0
  },
  stok: {
    type: Number,
    default: 0
  },
  foto_product: {
    type: String,
    default: null
  },
  keterangan: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: new Date().toISOString()
  }
})

module.exports = mongoose.model('product', mongoSchema)

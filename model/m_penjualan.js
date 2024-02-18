const mongoose = require('mongoose')
const moment = require('moment')
const ObjectId = mongoose.Types.ObjectId

const mongoSchema = mongoose.Schema({
  id_penjualan: {
    type: String,
    default: null
  },
  products: [
    {
      nama_product: {
        type: String,
        default: null
      },
      harga_jual: {
        type: Number,
        default: 0
      },
      jumlah_penjualan: {
        type: Number,
        default: null
      },
      total: {
        type: Number,
        default: null
      },
    }
  ],
  grandTotal: {
    type: Number,
    default: null
  },
  status_penjualan: {
    type: String,
    default: null
  },
  pelanggan: {
    type: String,
    default: null
  },
  nomor_telepon: {
    type: String,
    default: null
  },
  jumlah_pembayaran: {
    type: Number,
    default: null
  },
  tanggal_jatuh_tempo: {
    type: Date,
    default: null
  },
  alamat_penagihan: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: new Date().toISOString()
  }
})

module.exports = mongoose.model('penjualan', mongoSchema)

const mongoose = require('mongoose')
const moment = require('moment')
const ObjectId = mongoose.Types.ObjectId

const mongoSchema = mongoose.Schema({
  id_pembelian: {
    type: String,
    default: null
  },
  grandTotal: {
    type: Number,
    default: null
  },
  statusPembelian: {
    type: String,
    default: null
  },
  namaSupplier: {
    type: ObjectId
  },
  nomorTelepon: {
    type: String,
    default: null
  },
  tanggalJatuhTempo: {
    type: Date,
    default: null
  },
  alamatSupplier: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: new Date().toISOString()
  }
})

module.exports = mongoose.model('pembelian', mongoSchema)

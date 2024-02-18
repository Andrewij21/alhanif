const mongoose = require('mongoose')
const moment = require('moment')
const ObjectId = mongoose.Types.ObjectId

const mongoSchema = mongoose.Schema({

  objectIdPengeluaran: {
    type: ObjectId,
    default: null
  },
  idPengeluaran: {
    type: String,
    default: null
  },
  namaBarang: {
    type: String,
    default: null
  },
  hargaBarang: {
    type: Number,
    default: 0
  },
  jumlahPengeluaran: {
    type: Number,
    default: null
  },
  total: {
    type: Number,
    default: null
  },
  created_at: {
    type: Date,
    default: new Date().toISOString()
  }
})

module.exports = mongoose.model('detail_pengeluaran', mongoSchema)

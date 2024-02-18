const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const CustomerSchema = new Schema({
  id_supplier: {
    type: String,
    default: null
  },
  namaSupplier: {
    type: String,
    default: null
  },
  jenisSupplier: {
    type: String,
    default: null
  },
  alamatSupplier: {
    type: String,
    default: null
  },
  kotaSupplier: {
    type: String,
    default: null
  },
  posSupplier: {
    type: Number,
    default: null
  },
  teleponSupplier: {
    type: Number,
    default: null
  },
  emailSupplier: {
    type: String,
    default: null
  },
})

module.exports = mongoose.model('supplier', CustomerSchema)

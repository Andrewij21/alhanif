const mongoose = require('mongoose')
const moment = require('moment');

const mongoSchema = mongoose.Schema({
  type_id: String,
  type: String,
  name: String,
  created_at: {
    type: Date,
    default: new Date().toISOString()
  }
})

module.exports = mongoose.model('kategori_jenis', mongoSchema)

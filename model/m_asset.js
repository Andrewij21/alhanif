const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CustomerSchema = new Schema({
  id_asset: {
    type: String,
    default: null,
  },
  NamaAsset: {
    type: String,
    default: null,
  },
  JumlahAsset: {
    type: Number,
    default: null,
  },
  HargaAsset: {
    type: Number,
    default: null,
  },
  Total: {
    type: Number,
    default: null,
  },
  Keterangan: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("asset", CustomerSchema);

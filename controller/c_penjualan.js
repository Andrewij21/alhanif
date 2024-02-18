
const mongoose = require("mongoose")
const model = require("../model/m_penjualan")
const product = require("../model/m_product")
const { requestResponse } = require("../setup")
const ObjectId = mongoose.Types.ObjectId

const updateStok = (id, stokBaru) => {
  product
    .updateOne(
      { _id: ObjectId(id) },
      { $inc: { stok: -stokBaru } }
    ).then()
}

exports.addPenjualan = (data) =>
  new Promise((resolve, reject) => {
    try {
      model
        .create(data)
        .then(() => {
          data.products.forEach(r => {
            updateStok(r.object_id, r.jumlah_penjualan)
          })
          resolve(requestResponse.common_success)
        })
        .catch((e) => {
          console.log(e)
          reject(requestResponse.common_error)
        })
    } catch (e) {
      console.log(e)
      reject(requestResponse.common_error)
    }
  })

exports.getPenjualan = () =>
  new Promise((resolve, reject) => {
    try {
      model
        .find()
        .then((res) => {
          resolve(requestResponse.commonSuccessWithData(res))
        })
        .catch((e) => {
          console.log(e)
          reject(requestResponse.common_error)
        })
    } catch (e) {
      console.log(e)
      reject(requestResponse.common_error)
    }
  })

exports.getPenjualanById = (id) =>
  new Promise((resolve, reject) => {
    try {
      model
        .findOne({ _id: ObjectId(id) })
        .then((res) => {
          resolve(requestResponse.commonSuccessWithData(res))
        })
        .catch((e) => {
          console.log(e)
          reject(requestResponse.common_error)
        })
    } catch (e) {
      console.log(e)
      reject(requestResponse.common_error)
    }
  })

exports.updatePenjualan = (id, data) =>
  new Promise((resolve, reject) => {
    try {
      model
        .updateOne(
          { _id: ObjectId(id) },
          { $set: data }
        )
        .then(() => {
          resolve(requestResponse.common_success)
        })
        .catch((e) => {
          console.log(e)
          reject(requestResponse.common_error)
        })
    } catch (e) {
      console.log(e)
      reject(requestResponse.common_error)
    }
  })

exports.deletePenjualan = (id) =>
  new Promise((resolve, reject) => {
    try {
      model
        .deleteOne({ _id: ObjectId(id) })
        .then(() => {
          resolve(requestResponse.common_delete)
        })
        .catch((e) => {
          console.log(e)
          reject(requestResponse.common_error)
        })
    } catch (e) {
      console.log(e)
      reject(requestResponse.common_error)
    }
  })
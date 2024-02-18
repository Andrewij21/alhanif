const mongoose = require("mongoose")
const model = require("../../model/detail/m_detail_pembelian")
const { requestResponse } = require("../../setup")
const ObjectId = mongoose.Types.ObjectId

exports.addDetailPembelian = (data) => {
  try {
    model
      .create(data)
      .then(() => {
        console.log(requestResponse._success)
      })
      .catch((e) => {
        console.log(e)
        console.log(requestResponse._failed)
      })
  } catch (e) {
    console.log(e)
    console.log(requestResponse._error)
  }
}

exports.getAllDetailPembelian = () =>
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

exports.getDetailPembelianById = (object_id) =>
  new Promise((resolve, reject) => {
    try {
      model
        .find({ objectIdPembelian: ObjectId(object_id) })
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

exports.updateStokDetail = (id, stokBaru) =>
  new Promise((resolve, reject) => {
    try {
      model
        .updateOne(
          { _id: ObjectId(id) },
          { $inc: { stok: -stokBaru } }
        )
        .then(() => {
          console.log(requestResponse._success)
        })
        .catch((e) => {
          console.log(e)
          console.log(requestResponse._failed)
        })
    } catch (e) {
      console.log(e)
      console.log(requestResponse._error)
    }
  })

exports.deletePembelian = (id) =>
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
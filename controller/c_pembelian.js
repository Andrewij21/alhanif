
const mongoose = require("mongoose")
const model = require("../model/m_pembelian")
const c_detail_barang = require("./detail/c_detail_pembelian")
const { requestResponse } = require("../setup")
const ObjectId = mongoose.Types.ObjectId

exports.addPembelian = (data) =>
  new Promise((resolve, reject) => {
    try {
      model
        .create(data)
        .then((res) => {
          data.barangs.map(i => {
            return {
              objectIdPembelian: res._id,
              idPembelian: res.id_pembelian,
              namaBarang: i.namaBarang,
              hargaSatuan: i.hargaSatuan,
              pajak: i.pajak,
              jumlahPembelian: i.jumlahPembelian,
              total: i.total,
              stok: i.stok,
              deskripsi: i.deskripsi
            }
          }).forEach(detail => {
            c_detail_barang
              .addDetailPembelian(detail)
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

exports.getPembelian = () =>
  new Promise((resolve, reject) => {
    try {
      model
        .aggregate([
          {
            $lookup: {
                from: "suppliers",
                localField: "namaSupplier",
                foreignField: "_id",
                as: "dataSupplier"
              }
            }
            ])
        .then((res) => {
          console.log(res)
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

exports.getPembelianById = (id) =>
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

exports.updatePembelian = (id, data) =>
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
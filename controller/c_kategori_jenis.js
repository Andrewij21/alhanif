
const mongoose = require("mongoose")
const model = require("../model/m_kategori_jenis")
const config = require("../config/config.json")
const { requestResponse } = require("../setup")
const ObjectId = mongoose.Types.ObjectId

exports.addType = (data) =>
  new Promise((resolve, reject) => {
    try {
      model
        .create(data)
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

exports.getType = (type) =>
  new Promise((resolve, reject) => {
    try {
      model
        .find({ type: type })
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

exports.getTypeById = (id) =>
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

exports.updateType = (id, data) =>
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

exports.deleteType = (id) =>
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
const customerModel = require("../../model/MTI/m_kalendar");
const mongoose = require("mongoose");
const { requestResponse } = require("../../setup");
const ObjectId = mongoose.Types.ObjectId;

exports.insertCustomer = (data) =>
  new Promise((resolve, reject) => {
    customerModel
      .create(data)
      .then(() => resolve(requestResponse.common_success))
      .catch(() => reject(requestResponse.common_error));
  });

exports.getAllCustomer = () =>
  new Promise((resolve, reject) => {
    customerModel
      .find({})
      .then((result) => resolve(requestResponse.commonSuccessWithData(result)))
      .catch(() => reject(requestResponse.common_error));
  });

exports.deletePembelian = (id) =>
  new Promise((resolve, reject) => {
    try {
      customerModel
        .deleteOne({ _id: ObjectId(id) })
        .then(() => {
          resolve(requestResponse.common_delete);
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });

exports.updatePembelian = (id, data) =>
  new Promise((resolve, reject) => {
    try {
      customerModel
        .updateOne({ _id: ObjectId(id) }, { $set: data })
        .then(() => {
          resolve(requestResponse.common_success);
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });

exports.getPembelianById = (id) =>
  new Promise((resolve, reject) => {
    console.log(id);
    try {
      customerModel
        .findOne({ _id: ObjectId(id) })
        .then((res) => {
          resolve(requestResponse.commonSuccessWithData(res));
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });

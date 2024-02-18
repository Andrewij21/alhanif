const customerModel = require("../../model/PP/m_pp_santri");
const mongoose = require("mongoose");
const { requestResponse } = require("../../setup");
const ObjectId = mongoose.Types.ObjectId;
const { deleteImage } = require("../../config/uploadImg");

exports.insertCustomer = (data) =>
  new Promise((resolve, reject) => {
    customerModel.find({ id_santri: data.id_santri }).then((users) => {
      console.log(data);
      if (users.length > 0) {
        reject(requestResponse.username_already_use);
      } else {
        customerModel
          .create(data)
          .then((result) =>
            resolve(requestResponse.commonSuccessWithData(result))
          )
          .catch((err) => reject(requestResponse.common_error));
      }
    });
  });

exports.getAllCustomer = () =>
  new Promise((resolve, reject) => {
    customerModel
      .find({})
      .then((result) => resolve(requestResponse.commonSuccessWithData(result)))
      .catch(() => reject(requestResponse.common_error));
  });

// exports.addCustomer = (data) =>
//   new Promise((resolve, reject) => {
//     try {
//       model
//         .create(data)
//         .then((res) => {
//           data.customers(i => {
//             return {
//               idCustomer: res.id_customer,
//               namaCustomer: i.namaCustomer,
//               alamatCustomer: i.alamatCustomer,
//               kotaCustomer: i.kotaCustomer,
//               posCustomer: i.posCustomer,
//               teleponCustomer: i.teleponCustomer
//             }
//           })
//           resolve(requestResponse.common_success)
//         })
//         .catch((e) => {
//           console.log(e)
//           reject(requestResponse.common_error)
//         })
//     } catch (e) {
//       console.log(e)
//       reject(requestResponse.common_error)
//     }
//   })

// exports.getCustomer = () =>
//   new Promise((resolve, reject) => {
//     try {
//       model
//         .find()
//         .then((res) => {
//           resolve(requestResponse.commonSuccessWithData(res))
//         })
//         .catch((e) => {
//           console.log(e)
//           reject(requestResponse.common_error)
//         })
//     } catch (e) {
//       console.log(e)
//       reject(requestResponse.common_error)
//     }
//   })

// exports.getPembelianById = (id) =>
//   new Promise((resolve, reject) => {
//     try {
//       model
//         .findOne({ _id: ObjectId(id) })
//         .then((res) => {
//           resolve(requestResponse.commonSuccessWithData(res))
//         })
//         .catch((e) => {
//           console.log(e)
//           reject(requestResponse.common_error)
//         })
//     } catch (e) {
//       console.log(e)
//       reject(requestResponse.common_error)
//     }
//   })

// exports.updatePembelian = (id, data) =>
//   new Promise((resolve, reject) => {
//     try {
//       model
//         .updateOne(
//           { _id: ObjectId(id) },
//           { $set: data }
//         )
//         .then(() => {
//           resolve(requestResponse.common_success)
//         })
//         .catch((e) => {
//           console.log(e)
//           reject(requestResponse.common_error)
//         })
//     } catch (e) {
//       console.log(e)
//       reject(requestResponse.common_error)
//     }
//   })

exports.deletePembelian = (id) =>
  new Promise((resolve, reject) => {
    try {
      customerModel
        .findOne({ _id: ObjectId(id) })
        .then((jamaah) => {
          // console.log(jamaah);
          customerModel.deleteOne({ _id: ObjectId(id) }).then(() => {
            if (jamaah.foto == null) {
              console.log("Gambar Kosong");
            } else {
              deleteImage(jamaah.foto);
            }
            resolve(requestResponse.common_delete);
          });
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

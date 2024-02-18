
const uploadConf = require("../config/uploadImg")
const fields = uploadConf.upload.single('foto')
const controller = require("../controller/c_penjualan")

module.exports = (router) => {

  router.post("/penjualan/add", fields, (req, res) => {
    controller
      .addPenjualan(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/penjualan/get", (req, res) => {
    controller
      .getPenjualan()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/penjualan/getbyid/:id", (req, res) => {
    controller
      .getPenjualanById(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.put("/penjualan/update/:id", fields, (req, res) => {
    let newBody = req.body
    let foto = uploadConf.cekNull(req.file)
    if (foto !== null) {
      newBody.foto_product = foto
    }
    controller
      .updatePenjualan(req.params.id, newBody)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.delete("/penjualan/delete/:id", (req, res) => {
    controller
      .deletePenjualan(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

}
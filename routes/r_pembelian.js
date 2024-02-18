
const uploadConf = require("../config/uploadImg")
const fields = uploadConf.upload.single('foto')
const controller = require("../controller/c_pembelian")
const detail = require("../controller/detail/c_detail_pembelian")

module.exports = (router) => {

  router.post("/pembelian/add", (req, res) => {
    controller
      .addPembelian(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/pembelian/get", (req, res) => {
    controller
      .getPembelian()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/pembelian/getbyid/:id", (req, res) => {
    controller
      .getPembelianById(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.put("/pembelian/update/:id", (req, res) => {
    controller
      .updatePembelian(req.params.id, req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.delete("/pembelian/delete/:id", (req, res) => {
    controller
      .deletePembelian(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  //detail

  router.get("/pembelian/detail", (req, res) => {
    detail
      .getAllDetailPembelian()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/pembelian/detail/:id", (req, res) => {
    detail
      .getDetailPembelianById(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  //endDetail

}
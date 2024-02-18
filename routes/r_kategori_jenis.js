
const uploadConf = require("../config/uploadImg")
const { requestResponse } = require("../setup")
const fields = uploadConf.upload.single('foto')
const controller = require("../controller/c_kategori_jenis")

module.exports = (router) => {

  router.post("/type/addtype", (req, res) => {
    controller
      .addType(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/type/gettype/:type", (req, res) => {
    controller
      .getType(req.params.type)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/type/gettypebyid/:id", (req, res) => {
    controller
      .getTypeById(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.put("/type/updatetype/:id", (req, res) => {
    controller
      .updateType(req.params.id, req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.delete("/type/deletetype/:id", (req, res) => {
    controller
      .deleteType(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

}
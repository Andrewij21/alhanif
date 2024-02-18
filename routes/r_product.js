
const uploadConf = require("../config/uploadImg")
const fields = uploadConf.upload.single('foto')
const controller = require("../controller/c_product")

module.exports = (router) => {

  router.post("/product/add", fields, (req, res) => {
    let newBody = JSON.parse(req.body.data)
    let foto = uploadConf.cekNull(req.file)
    if (foto !== null) {
      newBody.foto_product = foto
    }
    controller
      .addProduct(newBody)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/product/get", (req, res) => {
    controller
      .getProduct()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.get("/product/getbyid/:id", (req, res) => {
    controller
      .getProductById(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.put("/product/update/:id", fields, (req, res) => {
    let newBody = JSON.parse(req.body.data)
    let foto = uploadConf.cekNull(req.file)
    if (foto !== null) {
      newBody.foto_product = foto
    }
    controller
      .updateProduct(req.params.id, newBody)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.delete("/product/delete/:id", (req, res) => {
    controller
      .deleteProduct(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

}
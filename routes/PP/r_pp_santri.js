const router = require("express").Router();
const uploadConf = require("../../config/uploadImg");
const userController = require("../../controller/PP/c_pp_santri");
const fields = uploadConf.upload.single("foto");

router.post("/add_santri", fields, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  let foto = uploadConf.cekNull(req.file);
  if (foto !== null) {
    newBody.foto = foto;
  }
  userController
    .insertCustomer(newBody)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_santri/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_santri", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_santri_id/:id_santri", (req, res) => {
  console.log(req.params.id_santri);
  userController
    .getPembelianById(req.params.id_santri)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/update_santri/:id_santri", fields, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  let foto = uploadConf.cekNull(req.file);
  if (foto !== null) {
    newBody.foto = foto;
  }
  userController
    .updatePembelian(req.params.id_santri, newBody)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

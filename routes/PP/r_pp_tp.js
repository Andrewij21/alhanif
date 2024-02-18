const router = require("express").Router();
const uploadConf = require("../../config/uploadImg");
const userController = require("../../controller/PP/c_pp_tp");
const fields = uploadConf.upload.single("foto");

router.post("/add_asatidz", fields, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  let foto = uploadConf.cekNull(req.file);
  if (foto !== null) {
    newBody.foto = foto;
  }
  console.log(newBody);
  userController
    .insertCustomer(newBody)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_asatidz/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_asatidz", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.put("/update_asatidz/:id_asatidz", fields, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  let foto = uploadConf.cekNull(req.file);
  if (foto !== null) {
    newBody.foto = foto;
  }
  console.log(newBody);
  userController
    .updatePembelian(req.params.id_asatidz, newBody)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_asatidz_id/:id_asatidz", (req, res) => {
  console.log(req.params.id_asatidz);
  userController
    .getPembelianById(req.params.id_asatidz)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;

const router = require("express").Router();
const uploadConf = require("../../config/uploadImg");
const userController = require("../../controller/TK/c_tk_guru");
const fields = uploadConf.upload.single("foto");

router.post("/add_guru", fields, (req, res) => {
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

router.delete("/delete_guru/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_guru", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.put("/update_guru/:id_guru", fields, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  let foto = uploadConf.cekNull(req.file);
  if (foto !== null) {
    newBody.foto = foto;
  }
  userController
    .updatePembelian(req.params.id_guru, newBody)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_guru_id/:id_guru", (req, res) => {
  console.log(req.params.id_guru);
  userController
    .getPembelianById(req.params.id_guru)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;

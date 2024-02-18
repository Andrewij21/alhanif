const router = require("express").Router();
const uploadConf = require("../../config/uploadImg");
const userController = require("../../controller/TK/c_tk_siswa");
const fields = uploadConf.upload.single("foto");

router.post("/add_siswa", fields, (req, res) => {
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

router.delete("/delete_siswa/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_siswa", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_siswa_id/:id_siswa", (req, res) => {
  console.log(req.params.id_siswa);
  userController
    .getPembelianById(req.params.id_siswa)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/update_siswa/:id_siswa", fields, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  let foto = uploadConf.cekNull(req.file);
  if (foto !== null) {
    newBody.foto = foto;
  }
  userController
    .updatePembelian(req.params.id_siswa, newBody)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

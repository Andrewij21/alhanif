const router = require("express").Router();
const uploadConf = require("../../config/uploadImg");
const userController = require("../../controller/MTI/c_jamaah");
const fields = uploadConf.upload.single("foto");

router.post("/add_jamaah", fields, (req, res) => {
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

router.put("/update_jamaah/:id_jamaah", fields, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  let foto = uploadConf.cekNull(req.file);
  if (foto !== null) {
    newBody.foto = foto;
  }
  userController
    .updatePembelian(req.params.id_jamaah, newBody)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_jamaah/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_jamaah", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_jamaah_id/:id_jamaah", (req, res) => {
  console.log(req.params.id_jamaah);
  userController
    .getPembelianById(req.params.id_jamaah)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_jamaah_kelas/:kelas", (req, res) => {
  console.log(req.params.kelas);
  console.log(req.body);
  userController
    .getSantriKelas(req.params.kelas)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

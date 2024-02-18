const router = require("express").Router();
const userController = require("../../controller/MTI/c_kelas_mti");

router.post("/add_kelas", (req, res) => {
  console.log(req.body);
  userController
    .insertCustomer(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_kelas/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_kelas", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_kelas_id/:id_kelas", (req, res) => {
  console.log(req.params.id_kelas);
  userController
    .getPembelianById(req.params.id_kelas)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/update_kelas/:id_kelas", (req, res) => {
  console.log(req.body);
  userController
    .updatePembelian(req.params.id_kelas, req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

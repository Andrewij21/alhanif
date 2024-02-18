const router = require("express").Router();
const userController = require("../../controller/PP/c_pp_jabatan");

router.post("/add_jabatan", (req, res) => {
  console.log(req.body);
  console.log("apsadasdasd");
  userController
    .insertCustomer(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_jabatan/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_jabatan", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_jabatan_id/:id_jabatan", (req, res) => {
  console.log(req.params.id_jabatan);
  userController
    .getPembelianById(req.params.id_jabatan)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/update_jabatan/:id_jabatan", (req, res) => {
  console.log(req.body);
  userController
    .updatePembelian(req.params.id_jabatan, req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

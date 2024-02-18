const router = require("express").Router();
const userController = require("../../controller/PP/c_pp_jabatan_tp");

router.post("/add_jabatan_tp", (req, res) => {
  console.log(req.body);
  console.log("apsadasdasd");
  userController
    .insertCustomer(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_jabatan_tp/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_jabatan_tp", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_jabatan_tp_id/:id_jabatan_tp", (req, res) => {
  console.log(req.params.id_jabatan_tp);
  userController
    .getPembelianById(req.params.id_jabatan_tp)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/update_jabatan_tp/:id_jabatan_tp", (req, res) => {
  console.log(req.body);
  userController
    .updatePembelian(req.params.id_jabatan_tp, req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

const router = require("express").Router();
const userController = require("../../controller/PP/c_pp_absensi");

router.post("/add_absensi", (req, res) => {
  console.log(req.body);
  userController
    .insertCustomer(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// router.post('/login', (req, res) => {
//     userController.login(req.body)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

router.get("/view_absensi_id/:id_absensi", (req, res) => {
  console.log(req.params.id_absensi);
  userController
    .getPembelianById(req.params.id_absensi)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/update_absensi/:id_absensi", (req, res) => {
  console.log(req.body);
  userController
    .updatePembelian(req.params.id_absensi, req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_absensi/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_absensi", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;
